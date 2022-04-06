FROM fusuf/whatsasena:latest

RUN git clone https://github.com/CYBERXKID/Alexa_V2 /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
RUN npm install supervisor -g
RUN git clone https://github.com/CYBERXKID/uploads
RUN cp -R /root/Utils/* /root/WhatsAsenaDuplicated 
CMD ["node", "bot.js"]
