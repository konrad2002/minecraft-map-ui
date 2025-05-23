FROM nginx
COPY dist/minecraft-map-ui/browser /usr/share/nginx/html
COPY /nginx.conf  /etc/nginx/conf.d/default.conf

#COPY src/assets/favicon /usr/share/nginx/html/

ARG VERSION="HEAD"
ARG BRANCH="LOCAL"

RUN rm -f /usr/share/nginx/html/assets/release.txt
RUN touch /usr/share/nginx/html/assets/release.txt
RUN echo $(date) > /usr/share/nginx/html/assets/release.txt

RUN rm -f /usr/share/nginx/html/assets/version.txt
RUN touch /usr/share/nginx/html/assets/version.txt
RUN echo $VERSION > /usr/share/nginx/html/assets/version.txt

EXPOSE 80
