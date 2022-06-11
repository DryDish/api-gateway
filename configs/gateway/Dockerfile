FROM nginx:stable-alpine

COPY ./configs/gateway/default.conf /etc/nginx/conf.d

# EXPOSE 80/tcp
# EXPOSE 443/tcp

CMD ["/bin/sh", "-c", "exec nginx -g 'daemon off;';"]

# WORKDIR /usr/share/nginx/html