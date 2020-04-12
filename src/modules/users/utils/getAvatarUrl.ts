const urls = [
  'https://gravatar.com/avatar/cd0b08204fae0765ea040fe8c919de0c?s=400&d=robohash&r=x',
  'https://gravatar.com/avatar/464abe0af4cb0f97aaaea6e721b1e42d?s=400&d=robohash&r=x',
  'https://gravatar.com/avatar/85e5c50d551a5229367fc99a41db15ad?s=400&d=robohash&r=x',
  'https://gravatar.com/avatar/bbe87191486589744899249fa500192e?s=400&d=robohash&r=x',
]

export default function getAvatarUrl() {
  const index = Math.floor(Math.random() * urls.length)

  return urls[index]
}
