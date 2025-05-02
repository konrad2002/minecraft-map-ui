export interface CalendarEntry {
  id: number,
  title: string,
  description: string,
  startTime: Date,
  endTime: Date,
  allDay: boolean,
  tags: string,
  forumLink: string,
  tournamentPlan: boolean,
  thumbnail: boolean,
  thumbnailLink: string,
  registerLink: boolean,
  contentLink: string,
  eventSystemShortName: string,
  countdown: boolean
}
