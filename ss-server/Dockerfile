FROM node
WORKDIR /code
COPY requirements.txt requirements.txt
# RUN pip install -r requirements.txt
COPY . .
EXPOSE 3000
CMD ["sh","docker.run.sh"]

# COPY ./docker-entrypoint.sh /docker-entrypoint.sh
# RUN chmod +x /docker-entrypoint.sh
# ENTRYPOINT ["/docker-entrypoint.sh"]
