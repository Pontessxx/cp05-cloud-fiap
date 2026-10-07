FROM nginx:alpine

# Atualiza os pacotes do sistema base (reduz CVEs no scan do Trivy)
RUN apk update && apk upgrade --no-cache

COPY index.html /usr/share/nginx/html/index.html

EXPOSE 80
