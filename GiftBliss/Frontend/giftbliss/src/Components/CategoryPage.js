import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../CSS/CategoryPage.css';
import Footer from './Footer';
import Header from './UserHeader';

const subcategoryImages = {
  art: [
        { src: '../images/BookSub/Art/1.jpg', name: 'Best 37 Arts Kits' },
        { src: '../images/BookSub/Art/2.jpg', name: 'Castle Art Supplies 72 watercolor Pencils set' },
        { src: '../images/BookSub/Art/3.jpg', name: '129 piece Deluxe Wooden Art Set' },
        { src: '../images/BookSub/Art/4.jpg', name: '72 Soucolo Soft Colored Pencils' },
        { src: '../images/BookSub/Art/5.jpg', name: '170 piece Delux Wooden Art Set' },
        { src: '../images/BookSub/Art/6.jpg', name: 'Watercolor Pencils' },
        // Add more images with names
  ],

  childrens: [
    { src: '../images/BookSub/Children/1.jpg', name: 'A Nearer Moon' }, 
    { src: '../images/BookSub/Children/2.jpg', name: 'Finding Wonders' },
    { src: '../images/BookSub/Children/3.jpg', name: 'Nest' },
    { src: '../images/BookSub/Children/4.jpg', name: 'Turtle Summer' },
    { src: '../images/BookSub/Children/5.jpg', name: 'We Light Up the Sky' },
    { src: '../images/BookSub/Children/6.jpg', name: 'You can write' },           // Add more images with names
  ],

  fiction: [
    { src: '../images/BookSub/Fiction/1.jpg', name: 'Dead Letter Delivery' },
    { src: '../images/BookSub/Fiction/2.jpg', name: 'Gideon' },
    { src: '../images/BookSub/Fiction/3.jpg', name: 'On A Quite Street' },
    { src: '../images/BookSub/Fiction/4.jpg', name: 'The Ferry Man' },
    { src: '../images/BookSub/Fiction/5.jpg', name: 'The One' }, 
    { src: '../images/BookSub/Fiction/6.jpg', name: 'The raven Tower' },
  ],

  journals: [
    { src: '../images/BookSub/Journal/1.jpg', name: 'Black Diary Sketchbook' },
    { src: '../images/BookSub/Journal/2.jpg', name: 'Handmade Paper, Custom Travel Memory Book' },
    { src: '../images/BookSub/Journal/3.jpg', name: 'Travel Diary Sketchbook' },
    { src: '../images/BookSub/Journal/4.jpg', name: 'Leather Journal Cover A5' },
    { src: '../images/BookSub/Journal/5.jpg', name: 'Purple Leather Notebook' },
    { src: '../images/BookSub/Journal/6.jpg', name: 'Vintage leather journal ' },
    
  ],

  nonfiction: [
    { src: '../images/BookSub/NonFiction/1.jpg', name: '11 Mysteries to Read If You Love Agatha Christie' },
    { src: '../images/BookSub/NonFiction/2.jpg', name: 'The 5 Types of Angels in the Bible' },
    { src: '../images/BookSub/NonFiction/3.jpg', name: 'The Ghosts of Happy Valley' },
    { src: '../images/BookSub/NonFiction/4.jpg', name: 'The Troubled Girls of Dragomir Academy' },
    { src: '../images/BookSub/NonFiction/5.jpg', name: 'They Both Die At The End' },
    { src: '../images/BookSub/NonFiction/6.jpg', name: 'Whatever You Do, Don\'t Run' },
  ],

  office: [
    { src: '../images/BookSub/Office/1.jpg', name: 'Acrylic Desktop Organizer_ Multi-functional Storage' },
    { src: '../images/BookSub/Office/2.jpg', name: 'Desk organizer' },
    { src: '../images/BookSub/Office/3.jpg', name: 'Desk Pen Organizer Large Capacity Desk ' },
    { src: '../images/BookSub/Office/4.jpg', name: 'Wood Desk Organizer' },
    { src: '../images/BookSub/Office/5.jpg', name: 'Riviera 6 Piece Gold Desk' },
    { src: '../images/BookSub/Office/6.jpg', name: 'Small Desk Organizer - Slate Blue' },

  ],

  audioequipment: [
    { src: '../images/ElectronicsSub/Audio/1.jpg', name: 'Beats Fit Pro - True Wireless Noise Cancelling Earbuds' },
    { src: '../images/ElectronicsSub/Audio/2.jpg', name: 'JBL Charge 3 Waterproof Bluetooth Speaker' },
    { src: '../images/ElectronicsSub/Audio/3.jpg', name: 'Samsung Galaxy Buds2 In-ear Headphones' },
    { src: '../images/ElectronicsSub/Audio/4.jpg', name: 'Sony SRS-XB12_B Bluetooth Speakers - Black' },
    { src: '../images/ElectronicsSub/Audio/5.jpg', name: 'Soundcore Anker Life Q20 Hybrid Active Noise Cancelling Headphones' },
    { src: '../images/ElectronicsSub/Audio/6.jpg', name: 'Soundcore Sport X10 True Wireless Bluetooth 5_2 Workout Headphones' },

  ],
  computer: [
    { src: '../images/ElectronicsSub/Computer/1.jpg', name: '7-Port USB Hub with USB C Power Port' },
    { src: '../images/ElectronicsSub/Computer/2.jpg', name: 'Alienware New Aurora R11 Gaming Desktop' },
    { src: '../images/ElectronicsSub/Computer/3.jpg', name: 'Modern Keyboard' },
    { src: '../images/ElectronicsSub/Computer/4.jpg', name: 'Razer Viper Optical Sensor' },
    { src: '../images/ElectronicsSub/Computer/5.jpg', name: 'ROYAL KLUDGE RK87 80 Percent Wireless TKL Mechanical Gaming Keyboard' },
    { src: '../images/ElectronicsSub/Computer/6.jpg', name: 'WANSISEN Pen Drive' },

  ],
  gaming: [
    { src: '../images/ElectronicsSub/Gaming/1.jpg', name: 'Dytole Bluetooth Headset' },
    { src: '../images/ElectronicsSub/Gaming/2.jpg', name: 'Logitech G335, Gaming Headset' },
    { src: '../images/ElectronicsSub/Gaming/3.jpg', name: 'Mocute 052 Bluetooth VR Controller ' },
    { src: '../images/ElectronicsSub/Gaming/4.jpg', name: 'Sony PS5 to VR' },
    { src: '../images/ElectronicsSub/Gaming/5.jpg', name: 'SteelSeries Wireless Gaming Controller' },
    { src: '../images/ElectronicsSub/Gaming/6.jpg', name: 'Virtual Glasses' },
  ],

  personalelectronics: [
    { src: '../images/ElectronicsSub/Personal/1.jpg', name: 'Baseus Magnetic Power Bank' },
    { src: '../images/ElectronicsSub/Personal/2.jpg', name: 'Fitbit Charge 4 Fitness and Activity Tracker with Built-in GPS' },
    { src: '../images/ElectronicsSub/Personal/3.jpg', name: 'LTS FAFA Chargeur Rapide USB' },
    { src: '../images/ElectronicsSub/Personal/4.jpg', name: 'POLAR Ignite 2 - Fitness Smartwatch' },
    { src: '../images/ElectronicsSub/Personal/5.jpg', name: 'Portable Charger 36800mAh,4 Outputs Power Bank' },
    { src: '../images/ElectronicsSub/Personal/6.jpg', name: 'Samsung Galaxy Watch4, 44mm in Green' },
  ],
  smarthome: [
    { src: '../images/ElectronicsSub/SmartHome/1.jpg', name: 'Brilliant Smart Home Control (4-Switch Panel) ' },
    { src: '../images/ElectronicsSub/SmartHome/2.jpg', name: 'Echo (3rd Gen) Twilight Blue Bundle' },
    { src: '../images/ElectronicsSub/SmartHome/3.jpg', name: 'Echo (4th Gen) _ With premium sound ' },
    { src: '../images/ElectronicsSub/SmartHome/4.jpg', name: 'Echo Plus (2nd Gen) - Premium sound' },
    { src: '../images/ElectronicsSub/SmartHome/5.jpg', name: 'Google Home Mini' },
    { src: '../images/ElectronicsSub/SmartHome/6.jpg', name: 'Siemens Smart Lock C321' },
  ],

  wearable: [
    { src: '../images/ElectronicsSub/Wearable/1.jpg', name: 'APX Labs mods Epson Moverio headset' },
    { src: '../images/ElectronicsSub/Wearable/2.jpg', name: 'GlazedCon conference showcases' },
    { src: '../images/ElectronicsSub/Wearable/3.jpg', name: 'Noise ColorFit Vision 2 Buzz Smartwatch' },
    { src: '../images/ElectronicsSub/Wearable/4.jpg', name: 'The Best Wearable Tech at CES 2022' },
    { src: '../images/ElectronicsSub/Wearable/5.jpg', name: 'White Glasses' },
    { src: '../images/ElectronicsSub/Wearable/6.jpg', name: 'Yanko Design' },

  ],

  apparel: [
    { src: '../images/FashionSub/Apparel/1.jpg', name: 'Brushed-Cashmere Shirt' },
    { src: '../images/FashionSub/Apparel/2.jpg', name: 'Ladies Long Sleeve T-shirts ' },
    { src: '../images/FashionSub/Apparel/3.jpg', name: 'Pale Pink Hoodie' },
    { src: '../images/FashionSub/Apparel/4.jpg', name: 'Striped V-Neck Short Sleeve T-Shirt' },
    { src: '../images/FashionSub/Apparel/5.jpg', name: 'Tulle skirt ' },
    { src: '../images/FashionSub/Apparel/6.jpg', name: 'Unisex Crewneck Sweatshirt' },
  ],

  bags: [
    { src: '../images/FashionSub/Bags/1.jpg', name: 'Men\'s Leather Backpack' },
    { src: '../images/FashionSub/Bags/2.jpg', name: 'Celina Backpack' },
    { src: '../images/FashionSub/Bags/3.jpg', name: 'Fossil Vickery Drawstring Leather Backpack' },
    { src: '../images/FashionSub/Bags/4.jpg', name: 'RFID Compact Note Wallet' },
    { src: '../images/FashionSub/Bags/5.jpg', name: 'Sylvia Universal Slim Laptop Bag' },
    { src: '../images/FashionSub/Bags/6.jpg', name: 'VIE Pinky Purse' },
  ],

  footwears: [
    { src: '../images/FashionSub/Footwears/1.jpg', name: 'Black Heels for Any Occasion' },
    { src: '../images/FashionSub/Footwears/2.jpg', name: 'Brown shoe' },
    { src: '../images/FashionSub/Footwears/3.jpg', name: 'Black Los botines' },
    { src: '../images/FashionSub/Footwears/4.jpg', name: 'Casual Shoes White Sneakers' },
    { src: '../images/FashionSub/Footwears/5.jpg', name: 'Commute-Friendly Shoes to Wear' },
    { src: '../images/FashionSub/Footwears/6.jpg', name: 'Zapatillas minimalistas planas White' },
  ],

  jewelry: [
    { src: '../images/FashionSub/Jwellary/1.webp', name: 'Bracelets' },
    { src: '../images/FashionSub/Jwellary/2.webp', name: 'Flower Modal earings' },
    { src: '../images/FashionSub/Jwellary/3.jpg', name: 'Leaves Design Earring' },
    { src: '../images/FashionSub/Jwellary/4.jpg', name: 'Necklace with Pear' },
    { src: '../images/FashionSub/Jwellary/5.jpg', name: 'Solitaire Rings' },
    { src: '../images/FashionSub/Jwellary/6.jpg', name: 'Twinkled Ring' },
  ],

  sunglasses: [
    { src: '../images/FashionSub/Sunglasses/1.jpg', name: 'Classic Lens Fashion Glasses' },
    { src: '../images/FashionSub/Sunglasses/2.jpg', name: 'Custom Lens Fashion' },
    { src: '../images/FashionSub/Sunglasses/3.jpg', name: 'Eye Glass' },
    { src: '../images/FashionSub/Sunglasses/4.jpg', name: 'Metal Frame Fashion Glasses' },
    { src: '../images/FashionSub/Sunglasses/5.jpg', name: 'SUMMER ESSENTIALS' },
    { src: '../images/FashionSub/Sunglasses/6.jpg', name: 'Winter Accessories for Women' },
  ],

  watches: [
    { src: '../images/FashionSub/Watches/1.jpg', name: 'Fossil Machine Leather Watch - Men\'s Watches' },
    { src: '../images/FashionSub/Watches/2.jpg', name: 'Garmin Lily™, Small GPS Smartwatch' },
    { src: '../images/FashionSub/Watches/3.jpg', name: 'Geneva wrist watch' },
    { src: '../images/FashionSub/Watches/4.jpg', name: 'Men Watches in Blck and Classic' },
    { src: '../images/FashionSub/Watches/5.jpg', name: 'Off white wrist watch' },
    { src: '../images/FashionSub/Watches/6.jpg', name: 'Relog Quartz Casual Watch' },
  ],

  fragrance: [
    { src: '../images/HealthSub/Fragrance/1.jpg', name: 'Bella Vita Organic Unisex Luxury Perfume ' },
    { src: '../images/HealthSub/Fragrance/2.jpg', name: 'CHANEL Eau de Parfum Spray' },
    { src: '../images/HealthSub/Fragrance/3.jpg', name: 'Guess Perfume)' },
    { src: '../images/HealthSub/Fragrance/4.jpg', name: 'Kim Kardashian True Reflection Women' },
    { src: '../images/HealthSub/Fragrance/5.jpg', name: 'Thesor Purple' },
    { src: '../images/HealthSub/Fragrance/6.jpg', name: 'Versace Men\'s Perfume' },
  ],

  haircare: [
    { src: '../images/HealthSub/Haircare/1.jpg', name: 'Blonde Ponytail Extension' },
    { src: '../images/HealthSub/Haircare/2.jpg', name: 'Blow dryer brush' },
    { src: '../images/HealthSub/Haircare/3.jpg', name: 'Designer Hair dresser' },
    { src: '../images/HealthSub/Haircare/4.jpg', name: 'Nioxin System 3 Trial Starter Kit' },
    { src: '../images/HealthSub/Haircare/5.jpg', name: 'Pack Of 3 Thermal Serum' },
    { src: '../images/HealthSub/Haircare/6.jpg', name: 'Wella Colour Motion Shampoo & Conditioner' },
  ],

  makeup: [
    { src: '../images/HealthSub/Makeup/1.jpg', name: '12 small grape beginner makeup brush sets' },
    { src: '../images/HealthSub/Makeup/2.jpg', name: 'Beauty sponge sets' },
    { src: '../images/HealthSub/Makeup/3.jpg', name: 'Eye Set, 6 Piece Makeup Brush Kit' },
    { src: '../images/HealthSub/Makeup/4.jpg', name: 'Lisa Eldridge Vega Eyeshadow Palette' },
    { src: '../images/HealthSub/Makeup/5.jpg', name: 'Morphe Makeup, Brush Sets & Palettess' },
    { src: '../images/HealthSub/Makeup/6.jpg', name: 'Rose Dune Palette' },
  ],

  skincare: [
    { src: '../images/HealthSub/Skincare/1.jpg', name: 'Anti-ageing Eye Massager' },
    { src: '../images/HealthSub/Skincare/2.jpg', name: 'Iope Stem3 Stemⅲ Skin Care' },
    { src: '../images/HealthSub/Skincare/3.jpg', name: 'Serum for Eye Area' },
    { src: '../images/HealthSub/Skincare/4.jpg', name: 'SK-II - PITERA Kit' },
    { src: '../images/HealthSub/Skincare/5.jpg', name: 'Skin Care Set Kmart Superfruits Serum' },
    { src: '../images/HealthSub/Skincare/6.jpg', name: 'True Botanicals Facialist Peel at Nordstrom' },
  ],

  wellness: [
    { src: '../images/HealthSub/Wellness/1.jpg', name: 'Essential Oil Diffuser Dark Wood' },
    { src: '../images/HealthSub/Wellness/2.jpg', name: 'Multifunctional Manual Six-wheel Neck Massager' },
    { src: '../images/HealthSub/Wellness/3.jpg', name: 'Signature Fitness High Density Yoga Mat' },
    { src: '../images/HealthSub/Wellness/4.jpg', name: 'Thick Yoga Mats' },
    { src: '../images/HealthSub/Wellness/5.jpg', name: 'Vitruvi Black Stone Essential Oil Diffuser' },
    { src: '../images/HealthSub/Wellness/6.jpg', name: 'Массажер Yunmai Massage Gun' },
  ],
  
  bath: [
    { src: '../images/HomeSub/bath/1.jpg', name: 'Bow mirror' },
    { src: '../images/HomeSub/bath/2.jpg', name: 'Cotton bath mat' },
    { src: '../images/HomeSub/bath/3.jpg', name: 'Cotton bath robe' },
    { src: '../images/HomeSub/bath/4.jpg', name: 'Nachi pink hooded kids towel' },
    { src: '../images/HomeSub/bath/5.jpg', name: 'Ribbed glass tumbler' },
    { src: '../images/HomeSub/bath/6.webp', name: 'Scented candles' },
  ],
  bedding: [
      { src: '../images/HomeSub/bedding/1.jpg', name: 'Bed sham' },
      { src: '../images/HomeSub/bedding/2.jpg', name: 'Black table mirror' },
      { src: '../images/HomeSub/bedding/3.jpg', name: 'Blanket' },
      { src: '../images/HomeSub/bedding/4.jpg', name: 'Blue bed sheet set' },
      { src: '../images/HomeSub/bedding/5.jpg', name: 'Organic cotton white bedding set' },
      { src: '../images/HomeSub/bedding/6.jpg', name: 'Pillows' },
  ],

  furniture: [
    { src: '../images/HomeSub/furniture/1.jpg', name: '3 piece l shaped sectional sofa' },
    { src: '../images/HomeSub/furniture/2.jpg', name: 'Bisou accent chair' },
    { src: '../images/HomeSub/furniture/3.jpg', name: 'Dining chair' },
    { src: '../images/HomeSub/furniture/4.jpg', name: 'Rove 6 dr dresser' },
    { src: '../images/HomeSub/furniture/5.jpg', name: 'White accent chair by leanne ford' },
    { src: '../images/HomeSub/furniture/6.jpg', name: 'Wood coffee table' },
  ],

  homedecor: [
    { src: '../images/HomeSub/Home decor/1.jpg', name: 'Bamboo metal tray' },
    { src: '../images/HomeSub/Home decor/2.jpg', name: 'Photo wall hanging picture frames' },
    { src: '../images/HomeSub/Home decor/3.jpg', name: 'Sedona white totes' },
    { src: '../images/HomeSub/Home decor/4.jpg', name: 'Wall clocks' },
    { src: '../images/HomeSub/Home decor/5.jpg', name: 'Warrick ribbed white vase' },
    { src: '../images/HomeSub/Home decor/6.jpg', name: 'Wick scented candle' },
  ],

  kitchenware: [
    { src: '../images/HomeSub/kitchen/1.jpg', name: '8 bottle cooler' },
    { src: '../images/HomeSub/kitchen/2.jpg', name: 'Blue stand mixer' },
    { src: '../images/HomeSub/kitchen/3.jpg', name: 'Electric kettle with maple handle' },
    { src: '../images/HomeSub/kitchen/4.jpg', name: 'Espresso Machine' },
    { src: '../images/HomeSub/kitchen/5.jpg', name: 'Gleevers' },
    { src: '../images/HomeSub/kitchen/6.jpg', name: 'oven' },
  ],

  outdoor: [
    { src: '../images/HomeSub/outdoor/1.jpg', name: 'Griddle with high shelves' },
    { src: '../images/HomeSub/outdoor/2.jpg', name: 'Hammock' },
    { src: '../images/HomeSub/outdoor/3.jpg', name: 'Ophelia planters' },
    { src: '../images/HomeSub/outdoor/4.jpg', name: 'Outdoor storage box' },
    { src: '../images/HomeSub/outdoor/5.jpg', name: 'Outdoor lantern' },
    { src: '../images/HomeSub/outdoor/6.jpg', name: 'Wall Mounted 4 Box Planters' },
  ],

  actionfigures: [
    { src: '../images/ToysSub/Action/1.jpg', name: 'DC Heroes' },
    { src: '../images/ToysSub/Action/2.jpg', name: 'Dragon ball z' },
    { src: '../images/ToysSub/Action/3.jpg', name: 'Marvel Heroes' },
    { src: '../images/ToysSub/Action/4.jpg', name: 'Soldiers' },
    { src: '../images/ToysSub/Action/5.jpg', name: 'Spider man' },
    { src: '../images/ToysSub/Action/6.jpg', name: 'US Army' },
  ],

  boardgames: [
    { src: '../images/ToysSub/Board/1.webp', name: 'Carrom Board' },
    { src: '../images/ToysSub/Board/2.jpg', name: 'Chess Board' },
    { src: '../images/ToysSub/Board/3.jpg', name: 'Code Breaker' },
    { src: '../images/ToysSub/Board/4.jpg', name: 'Ludo Board' },
    { src: '../images/ToysSub/Board/5.jpg', name: 'Monopoly' },
    { src: '../images/ToysSub/Board/6.jpg', name: 'Shot Game' },
  ],

  educationaltoys: [
    { src: '../images/ToysSub/Edu/1.jpg', name: 'A-Stem' },
    { src: '../images/ToysSub/Edu/2.jpg', name: 'Global' },
    { src: '../images/ToysSub/Edu/3.webp', name: 'Im-Stem' },
    { src: '../images/ToysSub/Edu/4.jpg', name: 'Mini Scientifi Tools' },
    { src: '../images/ToysSub/Edu/5.webp', name: 'Solar Robot-Stem' },
    { src: '../images/ToysSub/Edu/6.jpg', name: 'Vehicle-Stem' },
    
  ],

  outdoortoys: [
    { src: '../images/ToysSub/outdoor/1.webp', name: 'Bubble lawn mowerl' },
    { src: '../images/ToysSub/outdoor/2.webp', name: 'Play tents' },
    { src: '../images/ToysSub/outdoor/3.jpg', name: 'Seesaw' },
    { src: '../images/ToysSub/outdoor/4.jpg', name: 'Slider' },
    { src: '../images/ToysSub/outdoor/5.avif', name: 'Toy 3 wheel cycle' },
    { src: '../images/ToysSub/outdoor/6.jpg', name: 'Trampolines' },
  ],

  puzzles: [
    { src: '../images/ToysSub/puzzles/1.jpg', name: 'Carousel ball puzzle' },
    { src: '../images/ToysSub/puzzles/2.jpg', name: 'Cube' },
    { src: '../images/ToysSub/puzzles/3.jpg', name: 'Magnetic colour and number maze' },
    { src: '../images/ToysSub/puzzles/4.webp', name: 'Number puzzel game' },
    { src: '../images/ToysSub/puzzles/5.webp', name: 'Puzzle giraffe' },
    { src: '../images/ToysSub/puzzles/6.jpg', name: 'Ravensburger gingerbread house puzzle' },
  ],

  remotecontrol: [
    { src: '../images/ToysSub/remote/1.jpg', name: 'Baztoy RC car' },
    { src: '../images/ToysSub/remote/2.jpg', name: 'Mario Kart' },
    { src: '../images/ToysSub/remote/3.jpg', name: 'RC Helicopter' },
    { src: '../images/ToysSub/remote/4.webp', name: 'RC plane' },
    { src: '../images/ToysSub/remote/5.webp', name: 'RC Rock Crawler' },
    { src: '../images/ToysSub/remote/6.webp', name: 'Transformer RC Car' },
  ],

};

const categories = {
  books: [
    { image: '../images/Book/art.jpg', title: 'Art Supplies', path: 'art' },
    { image: '../images/Book/children.jpg', title: 'Children\'s Books', path: 'childrens' },
    { image: '../images/Book/fiction.avif', title: 'Fiction', path: 'fiction' },
    { image: '../images/Book/journals.jpg', title: 'Journals & Notebooks', path: 'journals' },
    { image: '../images/Book/non fiction.jpg', title: 'Non Fiction', path: 'nonfiction' },
    { image: '../images/Book/office.jpg', title: 'Office Supplies', path: 'office' },
  ],

  electronics: [
    { image: '../images/Electronics/audio.avif', title: 'Audio Equipment', path: 'audioequipment' },
    { image: '../images/Electronics/computer.jpg', title: 'Computer Accessories', path: 'computer' },
    { image: '../images/Electronics/gaming.avif', title: 'Gaming', path: 'gaming' },
    { image: '../images/Electronics/personalElectronics.jpg', title: 'Personal Electronics', path: 'personalelectronics' },
    { image: '../images/Electronics/smartHome.jpg', title: 'Smart Home Devices', path: 'smarthome' },
    { image: '../images/Electronics/wearable.jpg', title: 'Wearable Tech', path: 'wearable' },
  ],

  fashion: [
    { image: '../images/Fashion/apparel.webp', title: 'Apparel', path: 'apparel' },
    { image: '../images/Fashion/bags.jpg', title: 'Bags & Wallets', path: 'bags' },
    { image: '../images/Fashion/jewelry.jpg', title: 'Jewelry', path: 'jewelry' },
    { image: '../images/Fashion/sunglasses.jpg', title: 'Sunglasses', path: 'sunglasses' },
    { image: '../images/Fashion/Shoes.webp', title: 'Footwears', path: 'footwears' },
    { image: '../images/Fashion/watchess.jpg', title: 'Watches', path: 'watches' },
  ],

  health: [
    { image: '../images/Health/fragrance.jpg', title: 'Fragrance', path: 'fragrance' },
    { image: '../images/Health/haircare.avif', title: 'Haircare', path: 'haircare' },
    { image: '../images/Health/Makeup.jpg', title: 'Makeup', path: 'makeup' },
    { image: '../images/Health/skincare.jpg', title: 'Skincare', path: 'skincare' },
    { image: '../images/Health/wellness.webp', title: 'Wellness Products', path: 'wellness' },
  ],

  home: [
    { image: '../images/Home/bath.jpg', title: 'Bath', path: 'bath' },
    { image: '../images/Home/bedding.jpg', title: 'Bedding', path: 'bedding' },
    { image: '../images/Home/furniture.jpg', title: 'Furniture', path: 'furniture' },
    { image: '../images/Home/homeDecor.jpg', title: 'Home Decor', path: 'homedecor' },
    { image: '../images/Home/kitchenware.webp', title: 'Kitchenware', path: 'kitchenware' },
    { image: '../images/Home/outdoor.jpg', title: 'Outdoor & Garden', path: 'outdoor' },
  ],

  toys: [
    { image: '../images/Toys/action figures.jpg', title: 'Action Figures', path: 'actionfigures' },
    { image: '../images/Toys/boardgames.jpg', title: 'Board Games', path: 'boardgames' },
    { image: '../images/Toys/educational.jpg', title: 'Educational Toys', path: 'educationaltoys' },
    { image: '../images/Toys/puzzles.jpg', title: 'Puzzles', path: 'puzzles' },
    { image: '../images/Toys/remote.jpg', title: 'Remote Control Toys', path: 'remotecontrol' },
    { image: '../images/Toys/outdoor.webp', title: 'Outdoor Toys', path: 'outdoortoys' },
  ],
  // Define other main categories with their subcategories
};

const CategoryPage = () => {
  const { category, subcategory } = useParams();
  const isSubcategory = Boolean(subcategory);

  const items = isSubcategory
    ? subcategoryImages[subcategory] || []
    : categories[category] || [];

  return (
    <div className="homepage">
      <Header />
      
      <div className="category-section">
        <h2>{(isSubcategory ? subcategory : category).replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</h2>
        <div className="category-grid">
          {isSubcategory ? (
            items.map((item, index) => (
              <div key={index} className="subcategory-card">
                <img src={item.src} alt={item.name} className="subcategory-image" />
                <h3>{item.name}</h3>
              </div>
            ))
          ) : (
            items.map((item, index) => (
              <Link to={`/${category}/${item.path}`} key={index} className="category-card">
                <img src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
              </Link>
            ))
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CategoryPage;
