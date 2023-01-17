import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: '6ogwwpn8', //process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'skNpxCwRSw9rqh69kWuw1cNgCwHS0JhKtQapUMWJN9ZEjsTdG434tN1XGMJbgqG0cCnUMMFyD9HgifwtPRS3y8dC7xOsCDytgdKrew4Asfw0Q0CZzASDX4A0zofoeQBShpksEIRSym2KG4voQIJkWBI0HBjEE24UpCHBeMTxPtYUlknpZr6V'//process.env.REACT_APP_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);