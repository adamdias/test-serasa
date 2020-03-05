# APP em React Native para o teste do Serasa

Aplicativo mobile com os requisitos que o Serasa me passou para a realização do teste

# Instalação

- Caso não tenha o react-native-cli global é importante instalar, para isso basta rodar o comando abaixo:

```
yarn global add react-native-cli
```

- Agora temos que instalar todas as dependências:

```
yarn
```

- Para Android:

```
yarn android
```

OBS: você precisa de um emulador ou conectar seu dispositivo android pelo usb/wifi. Caso precise de ajuda, esse site pode te ajudar: https://docs.rocketseat.dev/ambiente-react-native/introducao

- Para IOS:

```
yarn ios
```

OBS: você tem que ter o xcode instalado e abrir ele antes de rodar o comando. Caso precise de ajuda esse site pode te ajudar: Caso precise de ajuda, esse site pode te ajudar: https://docs.rocketseat.dev/ambiente-react-native/introducao

# API de consumo

- no arquivo "./src/services/api.js" você pode configurar a url da api que está sendo consumida, quando essa api estiver em localhost, para android é necessário verificar o IP do emulador ou da sua máquina e alterar a url para esse IP

# Algumas tecnologias utilizadas

- React Native
- Reactotron
- Prettier
- Eslint
- Styled Components
- React Native Linear Gradient
- Axios
