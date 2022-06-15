FROM nginx:stable-alpine


COPY ./configs/gateway/root.conf          /etc/nginx/nginx.conf
COPY ./configs/gateway/default.conf       /etc/nginx/conf.d
COPY ./configs/gateway/container-map.conf /etc/nginx/conf.d

CMD ["/bin/sh", "-c", "exec nginx -g 'daemon off;';"]
