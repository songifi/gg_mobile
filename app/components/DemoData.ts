// Demo data for Home Screen UI
export const user = {
  username: "thetimileyin48",
  balance: 6192.5,
};

export const frequentGossips = [
  { name: "Alexis", image: require("@/assets/images/alexis.png") },
  { name: "Ralph", image: require("@/assets/images/avatar.png") },
  { name: "Victor", image: require("@/assets/images/victor.png") },
  { name: "Anna", image: require("@/assets/images/anna.png") },
  { name: "Jakub", image: require("@/assets/images/jakub.png") },
];

export const nfts = [
  {
    name: "Ganger Gangsta",
    price: 24.89,
    image: require("@/assets/images/gangster-nft.jpg"),
  },
  {
    name: "Nerdy Freddy Mendy",
    price: 24.89,
    image: require("@/assets/images/nerdy-nft.jpg"),
  },
];

export const nftGallery = [
  {
    name: "NFT 1",
    price: 24.89,
    image: require("@/assets/images/nft-1.png"),
  },
  {
    name: "NFT 2",
    price: 24.89,
    image: require("@/assets/images/nft-2.png"),
  },
  {
    name: "NFT 3",
    price: 24.89,
    image: require("@/assets/images/nft-3.png"),
  },
  {
    name: "NFT 4",
    price: 24.89,
    image: require("@/assets/images/nft-4.png"),
  },
  {
    name: "NFT 5",
    price: 24.89,
    image: require("@/assets/images/nft-5.png"),
  },
  {
    name: "NFT 6",
    price: 24.89,
    image: require("@/assets/images/nft-6.png"),
  },
  {
    name: "NFT 7",
    price: 24.89,
    image: require("@/assets/images/nft-7.png"),
  },
  {
    name: "NFT 8",
    price: 24.89,
    image: require("@/assets/images/nft-8.png"),
  },
  {
    name: "NFT 9",
    price: 24.89,
    image: require("@/assets/images/nft-9.png"),
  },
  {
    name: "NFT 10",
    price: 24.89,
    image: require("@/assets/images/nft-10.png"),
  },
  {
    name: "NFT 11",
    price: 24.89,
    image: require("@/assets/images/nft-11.png"),
  },
  {
    name: "NFT 12",
    price: 24.89,
    image: require("@/assets/images/nft-12.png"),
  },
];

enum ReadReceiptStatus {
  SENT = "sent",
  DELIVERED = "delivered",
  READ = "read",
  UNREAD = "unread",
}

export const chats = [
  {
    id: 1,
    dp: require("@/assets/images/chipmunk.png"),
    name: "thetimileyin",
    message: "GM serr",
    time: "22:17",
    readReceipt: ReadReceiptStatus.DELIVERED,
  },
  {
    id: 2,
    dp: require("@/assets/images/nft-7.png"),
    name: "cryptobae",
    message: "Wen airdrop?",
    time: "21:45",
    readReceipt: ReadReceiptStatus.SENT,
  },
  {
    id: 3,
    dp: require("@/assets/images/nft-3.png"),
    name: "zkbro",
    message: "You saw that pump??",
    time: "20:31",
    readReceipt: ReadReceiptStatus.DELIVERED,
  },
  {
    id: 4,
    dp: require("@/assets/images/nft-5.png"),
    name: "lunar.dev",
    message: "Docs updated!",
    time: "19:04",
    readReceipt: ReadReceiptStatus.UNREAD,
  },
  {
    id: 5,
    dp: require("@/assets/images/nft-6.png"),
    name: "nova.eth",
    message: "Let's deploy today",
    time: "17:50",
    readReceipt: ReadReceiptStatus.UNREAD,
  },
  {
    id: 6,

    dp: require("@/assets/images/nft-10.png"),
    name: "orbitron",
    message: "StarkNet 🔥",
    time: "16:38",
    readReceipt: ReadReceiptStatus.DELIVERED,
  },
  {
    id: 7,
    dp: require("@/assets/images/alexis.png"),
    name: "solace",
    message: "Pull request sent",
    time: "15:15",
    readReceipt: ReadReceiptStatus.DELIVERED,
  },
  {
    id: 8,
    dp: require("@/assets/images/anna.png"),
    name: "mira.ai",
    message: "Meeting at 4?",
    time: "14:05",
    readReceipt: ReadReceiptStatus.DELIVERED,
  },
  {
    id: 9,
    dp: require("@/assets/images/victor.png"),
    name: "astralfox",
    message: "Nice commit 👀",
    time: "13:22",
    readReceipt: ReadReceiptStatus.SENT,
  },
  {
    id: 10,
    dp: require("@/assets/images/jakub.png"),
    name: "bytegeist",
    message: "Check DM",
    time: "12:00",
    readReceipt: ReadReceiptStatus.SENT,
  },
];

export const chatMessages = [
  {
    id: 1,
    text: "GM to those that Gm.\nHow you doing man? I wanna send you some STRK but you gotta sing for me first🌚",
    sender: "me",
    time: "16:40",
  },
  {
    id: 2,
    text: "Man in as much as you are sending me that STRK, I can twerk if you want me to. Hell I will do whatever you want😜😘",
    sender: "other",
    time: "16:40",
  },
  {
    id: 3,
    text: "GM to those that Gm.\nHow you doing man? I wanna send you some STRK but you gotta sing for me first🌚",
    sender: "me",
    time: "16:40",
  },
  {
    id: 4,
    text: "Man in as much as you are sending me that STRK, I can twerk if you want me to. Hell I will do whatever you want😜😘",
    sender: "other",
    time: "16:40",
  },
  {
    id: 5,
    text: "Hey you there?? I was kidding",
    sender: "other",
    time: "16:40",
  },
];

export const nftData = [
  {
    id: 0,
    name: "Ganger Gangsta",
    price: 24.89,
    image: require("@/assets/images/gangster-nft.jpg"),
  },
  {
    id: 1,
    name: "Nerdy Freddy Mendy",
    price: 24.89,
    image: require("@/assets/images/nerdy-nft.jpg"),
  },
  {
    id: 2,
    name: "Pixel Panther",
    price: 24.89,
    image: require("@/assets/images/nft-1.png"),
  },
  {
    id: 3,
    name: "Cyber Ape",
    price: 24.89,
    image: require("@/assets/images/nft-2.png"),
  },
  {
    id: 4,
    name: "Space Pug",
    price: 24.89,
    image: require("@/assets/images/nft-3.png"),
  },
  {
    id: 5,
    name: "Neon Ghost",
    price: 24.89,
    image: require("@/assets/images/nft-4.png"),
  },
  {
    id: 6,
    name: "Purple Dino",
    price: 24.89,
    image: require("@/assets/images/nft-5.png"),
  },
  {
    id: 7,
    name: "Flame Fox",
    price: 24.89,
    image: require("@/assets/images/nft-6.png"),
  },
  {
    id: 8,
    name: "Green Samurai",
    price: 24.89,
    image: require("@/assets/images/nft-7.png"),
  },
  {
    id: 9,
    name: "Quantum Cat",
    price: 24.89,
    image: require("@/assets/images/nft-8.png"),
  },
  {
    id: 10,
    name: "Retro Rocket",
    price: 24.89,
    image: require("@/assets/images/nft-9.png"),
  },
  {
    id: 11,
    name: "Shadow Raptor",
    price: 24.89,
    image: require("@/assets/images/nft-10.png"),
  },
  {
    id: 12,
    name: "Electric Zebra",
    price: 24.89,
    image: require("@/assets/images/nft-11.png"),
  },
  {
    id: 13,
    name: "Cool Koala",
    price: 24.89,
    image: require("@/assets/images/nft-12.png"),
  },
  {
    id: 14,
    name: "AI Punk #14",
    price: 24.89,
    image: require("@/assets/images/nft-1.png"),
  },
  {
    id: 15,
    name: "Blade Bot",
    price: 24.89,
    image: require("@/assets/images/nft-4.png"),
  },
  {
    id: 16,
    name: "Zombie Zoomer",
    price: 24.89,
    image: require("@/assets/images/nft-5.png"),
  },
  {
    id: 17,
    name: "Mystic Yeti",
    price: 24.89,
    image: require("@/assets/images/nft-6.png"),
  },
  {
    id: 18,
    name: "Galactic Gecko",
    price: 24.89,
    image: require("@/assets/images/nft-7.png"),
  },
  {
    id: 19,
    name: "Cyber Pharaoh",
    price: 24.89,
    image: require("@/assets/images/nft-8.png"),
  },
  {
    id: 20,
    name: "Chill Axolotl",
    price: 24.89,
    image: require("@/assets/images/nft-9.png"),
  },
  {
    id: 21,
    name: "Stealth Shark",
    price: 24.89,
    image: require("@/assets/images/nft-2.png"),
  },
  {
    id: 22,
    name: "Smiley Alien",
    price: 24.89,
    image: require("@/assets/images/nft-1.png"),
  },
  {
    id: 23,
    name: "Bubble Boi",
    price: 24.89,
    image: require("@/assets/images/nft-2.png"),
  },
];

export const currencies = [
  { code: "USD", name: "US Dollar", flag: "https://flagcdn.com/w20/us.png" },
  { code: "EUR", name: "Euro", flag: "https://flagcdn.com/w20/eu.png" },
  {
    code: "GBP",
    name: "British Pound",
    flag: "https://flagcdn.com/w20/gb.png",
  },
  { code: "JPY", name: "Japanese Yen", flag: "https://flagcdn.com/w20/jp.png" },
  { code: "CNY", name: "Chinese Yuan", flag: "https://flagcdn.com/w20/cn.png" },
  {
    code: "AUD",
    name: "Australian Dollar",
    flag: "https://flagcdn.com/w20/au.png",
  },
  {
    code: "CAD",
    name: "Canadian Dollar",
    flag: "https://flagcdn.com/w20/ca.png",
  },
  { code: "CHF", name: "Swiss Franc", flag: "https://flagcdn.com/w20/ch.png" },
  { code: "INR", name: "Indian Rupee", flag: "https://flagcdn.com/w20/in.png" },
  {
    code: "BRL",
    name: "Brazilian Real",
    flag: "https://flagcdn.com/w20/br.png",
  },
];

export const transactions = [
  {
    id: 1,
    title: "Xaxxo just sent you some STRK",
    date: "15 March, 2025 • 12:43 PM",
    amount: "+400 USD",
    tokens: "10,654 STRK",
    icon: "celebration",
    iconType: "material",
    positive: true,
  },
  {
    id: 2,
    title: "Bet placed",
    date: "15 March, 2025 • 12:43 PM",
    amount: "-400 USD",
    tokens: "10,654 STRK",
    icon: "arrow-up-right",
    iconType: "feather",
    positive: false,
  },
  {
    id: 3,
    title: "Wallet Funded",
    date: "15 March, 2025 • 12:43 PM",
    amount: "+400 USD",
    tokens: "10,654 STRK",
    icon: "plus",
    iconType: "feather",
    positive: true,
  },
  {
    id: 4,
    title: "Xaxxo just sent you a NFT",
    date: "15 March, 2025 • 12:43 PM",
    amount: "+400 USD",
    tokens: "10,654 STRK",
    icon: "diamond",
    iconType: "fontawesome",
    positive: true,
  },
];
