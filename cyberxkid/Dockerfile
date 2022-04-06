FROM fusuf/whatsasena:latest

RUN git clone https://github.com/CYBERXKID/Alexa_V2 /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Africa/Johannesburg
RUN npm install supervisor -g
RUN yarn install --no-audit
RUN git clone https://github.com/CYBERXKID/files

CMD ["node", "bot.js"]
