SUPERVISORD_CONFIG=/app/etc/supervisord/dev.conf

cp /app/etc/nginx/dev.conf /etc/nginx/nginx.conf
exec /usr/bin/supervisord -n -c ${SUPERVISORD_CONFIG}
