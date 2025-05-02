import {Schematic} from "./schematic.model";
import {Directory} from "./directory.model";
import {SchematicTypeIcon} from "../../constants/schematic.contant";

export class SchematicListEntity {
  type: "SCHEMATIC" | "DIRECTORY";
  name: string;
  fullName: string;
  children: Map<string, SchematicListEntity> = new Map<string, SchematicListEntity>();  // direct child entries or schematic itself
  schematic?: Schematic;

  constructor(entity: Schematic | Directory) {
    if (entity) {
      if ('fileEnding' in entity) {
        this.type = "SCHEMATIC";
        this.name = this.trimLeadingSlashes(entity.name);
        this.fullName = this.trimLeadingSlashes(entity.fullName);
        this.schematic = entity;
      } else {
        this.type = "DIRECTORY";
        this.name = this.trimLeadingSlashes(entity.name);
        this.fullName = this.trimLeadingSlashes(entity.absolutePath);
      }
    } else {
      this.type = "DIRECTORY";
      this.name = "";
      this.fullName = "";
    }
  }

  // adds a schematic into the tree structure (recursively)
  // if directory exists -> add into directory
  // if directory does not exist -> create it, then add schematic
  add(schematic: Schematic) {
    this.addRec(schematic, this.trimLeadingSlashes(schematic.fullName));
  }

  addRec(schematic: Schematic, fullName: string) {
    let path: string = fullName;
    path = this.trimLeadingSlashes(path);

    // is schematic
    if (!path.includes("/")) {
      const entity = new SchematicListEntity(schematic);
      this.children.set("s" + schematic.name, entity);
      return;
    }

    // is schematic in directory
    const dirPath = this.beforeSlash(path);
    path = this.afterSlash(path);
    if (this.children.has("d" + dirPath)) {
      this.children.get("d" + dirPath)!.addRec(schematic, path);
    } else {
      const entity = new SchematicListEntity({
        name: dirPath,
        absolutePath: this.fullName + "/" + dirPath
      } as Directory);
      this.children.set("d" + dirPath, entity);
      entity.addRec(schematic, path);
    }
  }

  getIcon() {
    if (!this) return "description";
    if (this.type === "DIRECTORY") return "folder";
    if (this && this.schematic && this.schematic.type && this.schematic.type.name) {
      return SchematicTypeIcon[this.schematic.type.name];
    }
    return "description";
  }

  getDirectory(name: string): SchematicListEntity | undefined {
    return this.get(name, "d");
  }

  getSchematic(name: string): SchematicListEntity | undefined {
    return this.get(name, "s");
  }

  private get(name: string, type: "s" | "d"): SchematicListEntity | undefined {
    let entry: SchematicListEntity | undefined;

    name = this.trimLeadingSlashes(name);
    if (name.includes("/")) {
      const b = this.beforeSlash(name);
      const a = this.afterSlash(name);
      const child = this.children.get("d" + b);

      if (child) {
        return child.get(a, type);
      } else {
        return undefined;
      }
    } else {
      entry = this.children.get(type + name);
    }

    return entry;
  }

  // returns all schematic objects in this directory or the schematic itself
  getSchematics(): Schematic[] {
    switch (this.type) {
      case "SCHEMATIC":
        return [this.schematic!];
      case "DIRECTORY":
        { const schematics: Schematic[] = [];
        for (const child of this.children.values()) {
          if (child.type === "SCHEMATIC") schematics.push(child.schematic!);
        }
        return schematics; }
    }
  }

  // returns all schematics in this directory and all child directories OR the schematic itself
  getSchematicsRec(): Schematic[] {
    switch (this.type) {
      case "SCHEMATIC":
        return [this.schematic!];
      case "DIRECTORY":
        { let schematics: Schematic[] = [];
        for (const child of this.children.values()) {
          schematics = schematics.concat(child.getSchematicsRec());
        }
        return schematics; }
    }
  }

  public getDirectoryPath() {
    if (this.type === 'DIRECTORY') return this.fullName;
    return this.fullName.substring(0, this.fullName.lastIndexOf("/"));
  }

  private trimLeadingSlashes(text: string) {
    text = text.trimStart();
    while(text.startsWith("/")) {
      text = text.replace("/", "");
    }
    return text;
  }

  private beforeSlash(text: string) {
    return text.substring(0, text.indexOf("/"))
  }

  private afterSlash(text: string) {
    return text.substring(text.indexOf("/"))
  }

}
