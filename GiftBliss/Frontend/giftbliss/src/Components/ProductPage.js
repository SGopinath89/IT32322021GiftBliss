import React from 'react';
import { useParams ,useNavigate } from 'react-router-dom';
import '../CSS/ProductPage.css';
import Footer from '../Components/Footer';
import UserHeader from '../Components/UserHeader';
import { IoIosArrowRoundBack } from 'react-icons/io';

const productDetails = {
  art: [
    // <img alt="" src='images/header_logo1.png'></img>
    { src: '/images/BookSub/Art/1.jpg', name: 'Best 37 Arts Kits', description: 'A comprehensive arts kit with 37 pieces including brushes, colors, and more.', price: '$49.99', shippingPrice: '$5.99' },
    { src: '/images/BookSub/Art/2.jpg', name: 'Castle Art Supplies 72 Watercolor Pencils Set', description: '72 high-quality watercolor pencils ideal for artists.', price: '$29.99', shippingPrice: '$4.99' },
    { src: '/images/BookSub/Art/3.jpg', name: '129 Piece Deluxe Wooden Art Set', description: 'A deluxe wooden art set with 129 pieces, perfect for professionals.', price: '$99.99', shippingPrice: '$7.99' },
    { src: '/images/BookSub/Art/4.jpg', name: '72 Soucolor Soft Colored Pencils', description: 'Soft colored pencils set of 72 with vibrant colors.', price: '$19.99', shippingPrice: '$3.99' },
    { src: '/images/BookSub/Art/5.jpg', name: '170 Piece Deluxe Wooden Art Set', description: 'A comprehensive wooden art set with 170 pieces for all your art needs.', price: '$119.99', shippingPrice: '$8.99' },
    { src: '/images/BookSub/Art/6.jpg', name: 'Watercolor Pencils', description: 'High-quality watercolor pencils for artists.', price: '$15.99', shippingPrice: '$2.99' },
  ],

  childrens: [
    { src: '/images/BookSub/Children/1.jpg', name: 'A Nearer Moon', description: 'A magical adventure for young readers.', price: '$12.99', shippingPrice: '$3.49' },
    { src: '/images/BookSub/Children/2.jpg', name: 'Finding Wonders', description: 'Stories of female scientists who changed the world.', price: '$10.99', shippingPrice: '$2.99' },
    { src: '/images/BookSub/Children/3.jpg', name: 'Nest', description: 'A heartwarming story about family and home.', price: '$8.99', shippingPrice: '$1.99' },
    { src: '/images/BookSub/Children/4.jpg', name: 'Turtle Summer', description: 'An educational tale about sea turtles and conservation.', price: '$14.99', shippingPrice: '$3.99' },
    { src: '/images/BookSub/Children/5.jpg', name: 'We Light Up the Sky', description: 'A touching story of hope and community.', price: '$11.49', shippingPrice: '$2.79' },
    { src: '/images/BookSub/Children/6.jpg', name: 'You can write', description: 'A creative writing guide for young aspiring authors.', price: '$9.99', shippingPrice: '$2.49' },
  ],

  fiction: [
    { src: '/images/BookSub/Fiction/1.jpg', name: 'Dead Letter Delivery', description: 'An intriguing mystery novel about lost letters.', price: '$14.99', shippingPrice: '$3.99' },
    { src: '/images/BookSub/Fiction/2.jpg', name: 'Gideon', description: 'A gripping thriller about a detective on a mission.', price: '$11.49', shippingPrice: '$2.79' },
    { src: '/images/BookSub/Fiction/3.jpg', name: 'On A Quiet Street', description: 'A poignant tale of love and loss in a small town.', price: '$9.99', shippingPrice: '$2.49' },
    { src: '/images/BookSub/Fiction/4.jpg', name: 'The Ferry Man', description: 'A supernatural adventure set in a mysterious world.', price: '$16.99', shippingPrice: '$4.49' },
    { src: '/images/BookSub/Fiction/5.jpg', name: 'The One', description: 'A romantic novel exploring the complexities of relationships.', price: '$12.99', shippingPrice: '$3.49' },
    { src: '/images/BookSub/Fiction/6.jpg', name: 'The Raven Tower', description: 'A fantasy epic filled with magic and intrigue.', price: '$19.99', shippingPrice: '$5.99' },
  ],

  journals: [
    { src: '/images/BookSub/Journal/1.jpg', name: 'Black Diary Sketchbook', description: 'Stylish black diary sketchbook for creative minds.', price: '$19.99', shippingPrice: '$4.99' },
    { src: '/images/BookSub/Journal/2.jpg', name: 'Handmade Paper, Custom Travel Memory Book', description: 'Handmade paper travel memory book with customizable cover.', price: '$29.99', shippingPrice: '$5.99' },
    { src: '/images/BookSub/Journal/3.jpg', name: 'Travel Diary Sketchbook', description: 'Perfect for documenting your travels with sketches.', price: '$24.99', shippingPrice: '$4.49' },
    { src: '/images/BookSub/Journal/4.jpg', name: 'Leather Journal Cover A5', description: 'Leather cover for A5 journals, durable and elegant.', price: '$39.99', shippingPrice: '$6.99' },
    { src: '/images/BookSub/Journal/5.jpg', name: 'Purple Leather Notebook', description: 'Luxurious purple leather notebook for writing and notes.', price: '$21.99', shippingPrice: '$3.99' },
    { src: '/images/BookSub/Journal/6.jpg', name: 'Vintage leather journal', description: 'Vintage style leather journal with rustic charm.', price: '$34.99', shippingPrice: '$5.49' },
  ],

  nonfiction: [
    { src: '/images/BookSub/NonFiction/1.jpg', name: '11 Mysteries to Read If You Love Agatha Christie', description: 'A collection of mysteries in the style of Agatha Christie.', price: '$14.99', shippingPrice: '$3.99' },
    { src: '/images/BookSub/NonFiction/2.jpg', name: 'The 5 Types of Angels in the Bible', description: 'Exploring the different types of angels as described in the Bible.', price: '$12.99', shippingPrice: '$2.99' },
    { src: '/images/BookSub/NonFiction/3.jpg', name: 'The Ghosts of Happy Valley', description: 'A historical account of the ghosts and mysteries of Happy Valley.', price: '$16.99', shippingPrice: '$4.49' },
    { src: '/images/BookSub/NonFiction/4.jpg', name: 'The Troubled Girls of Dragomir Academy', description: 'A novel exploring the lives and challenges of girls at Dragomir Academy.', price: '$18.99', shippingPrice: '$4.99' },
    { src: '/images/BookSub/NonFiction/5.jpg', name: 'They Both Die At The End', description: 'A gripping novel about two strangers who learn they will die in the next 24 hours.', price: '$9.99', shippingPrice: '$1.99' },
    { src: '/images/BookSub/NonFiction/6.jpg', name: 'Whatever You Do, Don\'t Run', description: 'An adventurous memoir recounting wild encounters in remote places.', price: '$13.99', shippingPrice: '$3.49' },
  ],

  office: [
    { src: '/images/BookSub/Office/1.jpg', name: 'Acrylic Desktop Organizer_ Multi-functional Storage', description: 'A versatile acrylic organizer for desktop storage needs.', price: '$29.99', shippingPrice: '$4.99' },
    { src: '/images/BookSub/Office/2.jpg', name: 'Desk organizer', description: 'An organizer designed to keep your desk tidy and efficient.', price: '$19.99', shippingPrice: '$3.99' },
    { src: '/images/BookSub/Office/3.jpg', name: 'Desk Pen Organizer Large Capacity Desk', description: 'Large capacity desk organizer specifically for pens and office supplies.', price: '$24.99', shippingPrice: '$4.49' },
    { src: '/images/BookSub/Office/4.jpg', name: 'Wood Desk Organizer', description: 'An elegant wooden desk organizer to complement any workspace.', price: '$39.99', shippingPrice: '$5.99' },
    { src: '/images/BookSub/Office/5.jpg', name: 'Riviera 6 Piece Gold Desk', description: 'A luxurious gold-themed desk set including various office essentials.', price: '$49.99', shippingPrice: '$6.99' },
    { src: '/images/BookSub/Office/6.jpg', name: 'Small Desk Organizer - Slate Blue', description: 'Compact desk organizer in a stylish slate blue color.', price: '$14.99', shippingPrice: '$2.99' },
  ],

  audioequipment: [
    { src: '/images/ElectronicsSub/Audio/1.jpg', name: 'Beats Fit Pro - True Wireless Noise Cancelling Earbuds', description: 'High-quality wireless earbuds with noise cancelling technology.', price: '$199.99', shippingPrice: '$9.99' },
    { src: '/images/ElectronicsSub/Audio/2.jpg', name: 'JBL Charge 3 Waterproof Bluetooth Speaker', description: 'Waterproof Bluetooth speaker with excellent sound quality and durability.', price: '$129.99', shippingPrice: '$7.99' },
    { src: '/images/ElectronicsSub/Audio/3.jpg', name: 'Samsung Galaxy Buds2 In-ear Headphones', description: 'Compact in-ear headphones with advanced features from Samsung.', price: '$149.99', shippingPrice: '$8.99' },
    { src: '/images/ElectronicsSub/Audio/4.jpg', name: 'Sony SRS-XB12_B Bluetooth Speakers - Black', description: 'Portable Bluetooth speakers from Sony with enhanced bass.', price: '$79.99', shippingPrice: '$5.99' },
    { src: '/images/ElectronicsSub/Audio/5.jpg', name: 'Soundcore Anker Life Q20 Hybrid Active Noise Cancelling Headphones', description: 'Active noise cancelling headphones with hybrid technology for superior sound.', price: '$59.99', shippingPrice: '$4.99' },
    { src: '/images/ElectronicsSub/Audio/6.jpg', name: 'Soundcore Sport X10 True Wireless Bluetooth 5_2 Workout Headphones', description: 'True wireless Bluetooth headphones designed for workouts and active lifestyles.', price: '$39.99', shippingPrice: '$3.99' },
  ],

  computer: [
    { src: '/images/ElectronicsSub/Computer/1.jpg', name: '7-Port USB Hub with USB C Power Port', description: 'Expand your connectivity with the 7-Port USB Hub with USB C Power Port. This hub offers multiple USB ports along with a USB C power delivery port, making it ideal for charging devices and transferring data simultaneously.', price: '$24.99', shippingPrice: '$3.99' },
    { src: '/images/ElectronicsSub/Computer/2.jpg', name: 'Alienware New Aurora R11 Gaming Desktop', description: 'Immerse yourself in gaming with the Alienware New Aurora R11 Gaming Desktop. This powerful desktop features high-performance hardware designed for gaming enthusiasts, ensuring smooth gameplay and superior graphics.', price: '$1999.99', shippingPrice: '$49.99' },
    { src: '/images/ElectronicsSub/Computer/3.jpg', name: 'Modern Keyboard', description: 'Enhance your typing experience with the Modern Keyboard. Featuring a sleek design and ergonomic keys, this keyboard offers comfort and efficiency for both work and leisure.', price: '$129.99', shippingPrice: '$9.99' },
    { src: '/images/ElectronicsSub/Computer/4.jpg', name: 'Razer Viper Optical Sensor', description: 'Achieve precision gaming with the Razer Viper Optical Sensor. This gaming mouse features an advanced optical sensor and lightweight design, optimized for fast-paced gaming and competitive play.', price: '$79.99', shippingPrice: '$7.99' },
    { src: '/images/ElectronicsSub/Computer/5.jpg', name: 'ROYAL KLUDGE RK87 80 Percent Wireless TKL Mechanical Gaming Keyboard', description: 'Elevate your gaming setup with the ROYAL KLUDGE RK87 80 Percent Wireless TKL Mechanical Gaming Keyboard. This wireless keyboard combines mechanical switches with a compact TKL layout, perfect for gamers seeking responsive keystrokes and minimal desk space.', price: '$89.99', shippingPrice: '$7.99' },
    { src: '/images/ElectronicsSub/Computer/6.jpg', name: 'WANSISEN Pen Drive', description: 'Store and transfer files effortlessly with the WANSISEN Pen Drive. This portable USB drive offers ample storage capacity and fast data transfer speeds, making it convenient for storing documents, media, and more.', price: '$19.99', shippingPrice: '$3.99' }
  ],  

  gaming: [
    { src: '/images/ElectronicsSub/Gaming/1.jpg', name: 'Dytole Bluetooth Headset', description: 'Experience immersive audio with the Dytole Bluetooth Headset. This headset delivers high-quality sound and features wireless connectivity for convenient gaming sessions.', price: '$49.99', shippingPrice: '$5.99' },
    { src: '/images/ElectronicsSub/Gaming/2.jpg', name: 'Logitech G335, Gaming Headset', description: 'Enhance your gaming experience with the Logitech G335 Gaming Headset. Featuring comfortable ear cups and a lightweight design, this headset offers clear communication and dynamic sound.', price: '$69.99', shippingPrice: '$6.99' },
    { src: '/images/ElectronicsSub/Gaming/3.jpg', name: 'Mocute 052 Bluetooth VR Controller', description: 'Take control of your VR experience with the Mocute 052 Bluetooth VR Controller. This controller offers precise motion tracking and ergonomic design, ideal for immersive virtual reality gaming.', price: '$29.99', shippingPrice: '$4.99' },
    { src: '/images/ElectronicsSub/Gaming/4.jpg', name: 'Sony PS5 to VR', description: 'Explore new dimensions with the Sony PS5 to VR adapter. This adapter enables seamless connectivity between your PS5 console and VR headset, unlocking immersive gaming experiences.', price: '$19.99', shippingPrice: '$3.99' },
    { src: '/images/ElectronicsSub/Gaming/5.jpg', name: 'SteelSeries Wireless Gaming Controller', description: 'Elevate your gaming setup with the SteelSeries Wireless Gaming Controller. This controller offers responsive controls and wireless connectivity, ensuring a seamless gaming experience.', price: '$79.99', shippingPrice: '$7.99' },
    { src: '/images/ElectronicsSub/Gaming/6.jpg', name: 'Virtual Glasses', description: 'Immerse yourself in virtual worlds with Virtual Glasses. These glasses offer high-definition visuals and comfortable wear, perfect for exploring virtual reality environments.', price: '$99.99', shippingPrice: '$8.99' }
  ],  

  personalelectronics: [
    { src: '/images/ElectronicsSub/Personal/1.jpg', name: 'Baseus Magnetic Power Bank', description: 'Keep your devices charged on the go with the Baseus Magnetic Power Bank. This power bank features magnetic attachment for convenience and supports fast charging for efficient power replenishment.', price: '$39.99', shippingPrice: '$4.99' },
    { src: '/images/ElectronicsSub/Personal/2.jpg', name: 'Fitbit Charge 4 Fitness and Activity Tracker with Built-in GPS', description: 'Track your fitness goals with the Fitbit Charge 4 Fitness and Activity Tracker. This tracker includes built-in GPS for accurate activity tracking and monitors heart rate, sleep patterns, and more.', price: '$129.99', shippingPrice: '$7.99' },
    { src: '/images/ElectronicsSub/Personal/3.jpg', name: 'LTS FAFA Chargeur Rapide USB', description: 'Charge your devices quickly and efficiently with the LTS FAFA Chargeur Rapide USB. This charger supports rapid USB charging, making it ideal for smartphones, tablets, and other USB-powered devices.', price: '$19.99', shippingPrice: '$3.99' },
    { src: '/images/ElectronicsSub/Personal/4.jpg', name: 'POLAR Ignite 2 - Fitness Smartwatch', description: 'Achieve your fitness goals with the POLAR Ignite 2 Fitness Smartwatch. This smartwatch tracks your workouts, heart rate, and sleep quality, providing insights and guidance for a healthier lifestyle.', price: '$179.99', shippingPrice: '$9.99' },
    { src: '/images/ElectronicsSub/Personal/5.jpg', name: 'Portable Charger 36800mAh,4 Outputs Power Bank', description: 'Stay powered throughout the day with the Portable Charger 36800mAh Power Bank. With four output ports, this power bank offers high-capacity charging for multiple devices simultaneously.', price: '$49.99', shippingPrice: '$5.99' },
    { src: '/images/ElectronicsSub/Personal/6.jpg', name: 'Samsung Galaxy Watch4, 44mm in Green', description: 'Enhance your daily routine with the Samsung Galaxy Watch4. This smartwatch in 44mm size features advanced health monitoring, customizable watch faces, and seamless integration with your Samsung devices.', price: '$249.99', shippingPrice: '$10.99' }
  ],
  
  smarthome: [
    { src: '/images/ElectronicsSub/SmartHome/1.jpg', name: 'Brilliant Smart Home Control (4-Switch Panel)', description: 'Transform your home with the Brilliant Smart Home Control. This 4-switch panel allows you to manage lighting, music, and other smart devices with touchscreen convenience and voice control integration.', price: '$299.99', shippingPrice: '$9.99' },
    { src: '/images/ElectronicsSub/SmartHome/2.jpg', name: 'Echo (3rd Gen) Twilight Blue Bundle', description: 'Enjoy hands-free convenience with the Echo (3rd Gen) Twilight Blue Bundle. This bundle includes the Echo smart speaker with Alexa voice control, offering premium sound quality and smart home integration.', price: '$99.99', shippingPrice: '$7.99' },
    { src: '../images/ElectronicsSub/SmartHome/3.jpg', name: 'Echo (4th Gen) - With premium sound', description: 'Upgrade your home audio experience with the Echo (4th Gen). This smart speaker delivers premium sound quality and features Alexa voice control for hands-free music streaming, smart home management, and more.', price: '$129.99', shippingPrice: '$8.99' },
    { src: '../images/ElectronicsSub/SmartHome/4.jpg', name: 'Echo Plus (2nd Gen) - Premium sound', description: 'Immerse yourself in rich, room-filling sound with the Echo Plus (2nd Gen). This smart speaker features premium speakers powered by Dolby processing for crisp vocals and dynamic bass, perfect for music enthusiasts.', price: '$149.99', shippingPrice: '$9.99' },
    { src: '../images/ElectronicsSub/SmartHome/5.jpg', name: 'Google Home Mini', description: 'Make your home smarter with the Google Home Mini. This compact smart speaker offers hands-free help from Google Assistant, allowing you to control smart devices, get answers, and enjoy music effortlessly.', price: '$49.99', shippingPrice: '$5.99' },
    { src: '../images/ElectronicsSub/SmartHome/6.jpg', name: 'Siemens Smart Lock C321', description: 'Enhance your home security with the Siemens Smart Lock C321. This smart lock features keyless entry via smartphone or PIN, advanced encryption technology, and remote access capabilities for peace of mind.', price: '$199.99', shippingPrice: '$9.99' }
  ],
  
  wearable: [
    { src: '../images/ElectronicsSub/Wearable/1.jpg', name: 'APX Labs mods Epson Moverio headset', description: 'Explore the APX Labs mods Epson Moverio headset, combining augmented reality with advanced optics for immersive experiences in gaming, education, and industrial applications.', price: '$499.99', shippingPrice: '$12.99' },
    { src: '../images/ElectronicsSub/Wearable/2.jpg', name: 'GlazedCon conference showcases', description: 'Discover the latest innovations from the GlazedCon conference showcases, featuring wearable technology that enhances productivity, connectivity, and health monitoring.', price: '$299.99', shippingPrice: '$9.99' },
    { src: '../images/ElectronicsSub/Wearable/3.jpg', name: 'Noise ColorFit Vision 2 Buzz Smartwatch', description: 'Stay connected and stylish with the Noise ColorFit Vision 2 Buzz Smartwatch. This sleek smartwatch offers fitness tracking, heart rate monitoring, and smart notifications to keep you informed and active.', price: '$129.99', shippingPrice: '$7.99' },
    { src: '../images/ElectronicsSub/Wearable/4.jpg', name: 'The Best Wearable Tech at CES 2022', description: 'Experience the best of wearable technology showcased at CES 2022. From advanced fitness trackers to cutting-edge smart glasses, these innovations redefine how we interact with technology on the go.', price: '$199.99', shippingPrice: '$8.99' },
    { src: '../images/ElectronicsSub/Wearable/5.jpg', name: 'White Glasses', description: 'Enhance your style with White Glasses, blending fashion with UV protection and blue light filtering for comfortable and clear vision indoors and outdoors.', price: '$79.99', shippingPrice: '$5.99' },
    { src: '../images/ElectronicsSub/Wearable/6.jpg', name: 'Yanko Design', description: 'Explore the future of wearable technology with Yanko Design. From conceptual designs to practical innovations, discover wearable tech that integrates seamlessly into daily life.', price: '$149.99', shippingPrice: '$6.99' }
  ],

  apparel: [
    { src: '../images/FashionSub/Apparel/1.jpg', name: 'Brushed-Cashmere Shirt', description: 'Indulge in luxurious comfort with the Brushed-Cashmere Shirt, crafted from premium cashmere for softness and warmth, ideal for cool evenings and casual outings.', price: '$149.99', shippingPrice: '$9.99' },
    { src: '../images/FashionSub/Apparel/2.jpg', name: 'Ladies Long Sleeve T-shirts', description: 'Elevate your everyday wardrobe with the Ladies Long Sleeve T-shirts, featuring a flattering fit and breathable fabric, perfect for layering or wearing solo.', price: '$29.99', shippingPrice: '$5.99' },
    { src: '/images/FashionSub/Apparel/3.jpg', name: 'Pale Pink Hoodie', description: 'Stay cozy and stylish in the Pale Pink Hoodie, offering a relaxed fit and soft fleece lining, ideal for lounging at home or running errands on chilly days.', price: '$49.99', shippingPrice: '$7.99' },
    { src: '/images/FashionSub/Apparel/4.jpg', name: 'Striped V-Neck Short Sleeve T-Shirt', description: 'Update your casual wardrobe with the Striped V-Neck Short Sleeve T-Shirt, featuring a classic striped pattern and comfortable cotton blend for everyday wear.', price: '$19.99', shippingPrice: '$4.99' },
    { src: '/images/FashionSub/Apparel/5.jpg', name: 'Tulle skirt', description: 'Make a statement with the Tulle skirt, designed with layers of soft tulle and a satin waistband, perfect for special occasions and adding a touch of elegance to your ensemble.', price: '$79.99', shippingPrice: '$6.99' },
    { src: '/images/FashionSub/Apparel/6.jpg', name: 'Unisex Crewneck Sweatshirt', description: 'Stay effortlessly cool and comfortable in the Unisex Crewneck Sweatshirt, featuring a versatile design and cozy fleece interior, suitable for all-day wear.', price: '$39.99', shippingPrice: '$5.99' }
  ],  

  bags: [
    { src: '/images/FashionSub/Bags/1.jpg', name: 'Men\'s Leather Backpack', description: 'Carry your essentials in style with the Men\'s Leather Backpack, crafted from premium leather for durability and featuring multiple compartments for organization on the go.', price: '$199.99', shippingPrice: '$12.99' },
    { src: '/images/FashionSub/Bags/2.jpg', name: 'Celina Backpack', description: 'Embrace modern elegance with the Celina Backpack, designed with sleek lines and a spacious interior, ideal for daily commutes or weekend getaways.', price: '$129.99', shippingPrice: '$9.99' },
    { src: '/images/FashionSub/Bags/3.jpg', name: 'Fossil Vickery Drawstring Leather Backpack', description: 'Discover timeless charm with the Fossil Vickery Drawstring Leather Backpack, featuring supple leather construction and a drawstring closure for security and style.', price: '$179.99', shippingPrice: '$11.99' },
    { src: '/images/FashionSub/Bags/4.jpg', name: 'RFID Compact Note Wallet', description: 'Protect your essentials with the RFID Compact Note Wallet, equipped with RFID-blocking technology and multiple pockets for cards and cash, ensuring security and convenience.', price: '$49.99', shippingPrice: '$6.99' },
    { src: '/images/FashionSub/Bags/5.jpg', name: 'Sylvia Universal Slim Laptop Bag', description: 'Stay organized and stylish with the Sylvia Universal Slim Laptop Bag, featuring a sleek design and padded compartments to safeguard your laptop and accessories.', price: '$89.99', shippingPrice: '$8.99' },
    { src: '/images/FashionSub/Bags/6.jpg', name: 'VIE Pinky Purse', description: 'Add a pop of color to your ensemble with the VIE Pinky Purse, crafted from premium materials and featuring a compact design for carrying essentials with ease.', price: '$59.99', shippingPrice: '$7.99' }
  ],
  
  footwears: [
    { src: '/images/FashionSub/Footwears/1.jpg', name: 'Black Heels for Any Occasion', description: 'Elevate your style with these versatile Black Heels for Any Occasion, featuring a classic design and comfortable fit for all-day wear.', price: '$79.99', shippingPrice: '$9.99' },
    { src: '/images/FashionSub/Footwears/2.jpg', name: 'Brown shoe', description: 'Step out in style with the Brown Shoe, crafted from premium materials and designed for both comfort and durability.', price: '$89.99', shippingPrice: '$10.99' },
    { src: '/images/FashionSub/Footwears/3.jpg', name: 'Black Los botines', description: 'Add a touch of elegance to your ensemble with the Black Los Botines, featuring a sleek silhouette and versatile design.', price: '$99.99', shippingPrice: '$11.99' },
    { src: '/images/FashionSub/Footwears/4.jpg', name: 'Casual Shoes White Sneakers', description: 'Stay casual yet stylish with the Casual Shoes White Sneakers, perfect for everyday wear and weekend outings.', price: '$69.99', shippingPrice: '$8.99' },
    { src: '/images/FashionSub/Footwears/5.jpg', name: 'Commute-Friendly Shoes to Wear', description: 'Navigate your day with ease in these Commute-Friendly Shoes to Wear, designed for comfort and functionality.', price: '$79.99', shippingPrice: '$9.99' },
    { src: '/images/FashionSub/Footwears/6.jpg', name: 'Zapatillas minimalistas planas White', description: 'Achieve minimalist chic with the Zapatillas Minimalistas Planas White, featuring a clean, streamlined design for effortless style.', price: '$59.99', shippingPrice: '$7.99' }
  ],
  
  jewelry: [
    { src: '/images/FashionSub/Jwellary/1.webp', name: 'Bracelets', description: 'Elegant and versatile, these Bracelets add a touch of sophistication to any outfit, perfect for both casual and formal occasions.', price: '$49.99', shippingPrice: '$4.99' },
    { src: '/images/FashionSub/Jwellary/2.webp', name: 'Flower Modal Earings', description: 'Delicate and stylish, the Flower Modal Earings feature a beautiful floral design that enhances your natural beauty.', price: '$39.99', shippingPrice: '$3.99' },
    { src: '/images/FashionSub/Jwellary/3.jpg', name: 'Leaves Design Earring', description: 'Add a touch of nature to your style with these Leaves Design Earrings, perfect for everyday wear or special occasions.', price: '$29.99', shippingPrice: '$3.49' },
    { src: '/images/FashionSub/Jwellary/4.jpg', name: 'Necklace with Pear', description: 'The Necklace with Pear combines elegance and simplicity, featuring a single pear-shaped pendant for a timeless look.', price: '$59.99', shippingPrice: '$5.99' },
    { src: '/images/FashionSub/Jwellary/5.jpg', name: 'Solitaire Rings', description: 'Timeless and classic, the Solitaire Rings are crafted to perfection, making them an ideal gift for any occasion.', price: '$89.99', shippingPrice: '$6.99' },
    { src: '/images/FashionSub/Jwellary/6.jpg', name: 'Twinkled Ring', description: 'Shine brightly with the Twinkled Ring, featuring a unique design that sparkles with every move.', price: '$69.99', shippingPrice: '$5.49' }
  ],
  
  sunglasses: [
    { src: '/images/FashionSub/Sunglasses/1.jpg', name: 'Classic Lens Fashion Glasses', description: 'Timeless and versatile, these Classic Lens Fashion Glasses offer superior UV protection and a stylish look.', price: '$69.99', shippingPrice: '$5.99' },
    { src: '/images/FashionSub/Sunglasses/2.jpg', name: 'Custom Lens Fashion', description: 'Personalize your style with Custom Lens Fashion sunglasses, providing a unique and fashionable statement.', price: '$79.99', shippingPrice: '$6.99' },
    { src: '/images/FashionSub/Sunglasses/3.jpg', name: 'Eye Glass', description: 'Chic and trendy, Eye Glass sunglasses combine comfort and style for daily wear.', price: '$59.99', shippingPrice: '$4.99' },
    { src: '/images/FashionSub/Sunglasses/4.jpg', name: 'Metal Frame Fashion Glasses', description: 'Durable and elegant, Metal Frame Fashion Glasses are designed for a modern and sleek appearance.', price: '$89.99', shippingPrice: '$7.99' },
    { src: '/images/FashionSub/Sunglasses/5.jpg', name: 'SUMMER ESSENTIALS', description: 'Stay cool and protected with SUMMER ESSENTIALS sunglasses, perfect for sunny days and outdoor activities.', price: '$49.99', shippingPrice: '$3.99' },
    { src: '/images/FashionSub/Sunglasses/6.jpg', name: 'Winter Accessories for Women', description: 'Fashionable and functional, Winter Accessories for Women sunglasses offer protection and style in colder weather.', price: '$69.99', shippingPrice: '$5.99' }
  ],
  
  watches: [
    { src: '/images/FashionSub/Watches/1.jpg', name: 'Fossil Machine Leather Watch - Men\'s Watches', description: 'Classic and rugged, the Fossil Machine Leather Watch features a bold design perfect for any occasion.', price: '$129.99', shippingPrice: '$8.99' },
    { src: '/images/FashionSub/Watches/2.jpg', name: 'Garmin Lily™, Small GPS Smartwatch', description: 'Stylish and functional, the Garmin Lily™ GPS Smartwatch offers fitness tracking and smart notifications.', price: '$199.99', shippingPrice: '$7.99' },
    { src: '/images/FashionSub/Watches/3.jpg', name: 'Geneva wrist watch', description: 'Elegant and affordable, the Geneva wrist watch is a timeless accessory for everyday wear.', price: '$49.99', shippingPrice: '$4.99' },
    { src: '/images/FashionSub/Watches/4.jpg', name: 'Men Watches in Blck and Classic', description: 'Sophisticated and versatile, these Men\'s Watches in Black and Classic styles suit any formal or casual attire.', price: '$89.99', shippingPrice: '$6.99' },
    { src: '/images/FashionSub/Watches/5.jpg', name: 'Off white wrist watch', description: 'Chic and minimalist, the Off white wrist watch is a perfect accessory for modern fashion enthusiasts.', price: '$79.99', shippingPrice: '$5.99' },
    { src: '/images/FashionSub/Watches/6.jpg', name: 'Relog Quartz Casual Watch', description: 'Reliable and stylish, the Relog Quartz Casual Watch offers precise timekeeping and a sleek design.', price: '$59.99', shippingPrice: '$4.99' }
  ],
  
  fragrance: [
    { src: '/images/HealthSub/Fragrance/1.jpg', name: 'Bella Vita Organic Unisex Luxury Perfume', description: 'Experience the timeless elegance of Bella Vita Organic Unisex Luxury Perfume, perfect for any occasion.', price: '$39.99', shippingPrice: '$5.99' },
    { src: '/images/HealthSub/Fragrance/2.jpg', name: 'CHANEL Eau de Parfum Spray', description: 'Indulge in the classic allure of CHANEL Eau de Parfum Spray, a sophisticated fragrance for the modern individual.', price: '$129.99', shippingPrice: '$8.99' },
    { src: '/images/HealthSub/Fragrance/3.jpg', name: 'Guess Perfume', description: 'Embrace the captivating scent of Guess Perfume, a perfect blend of elegance and charm.', price: '$49.99', shippingPrice: '$4.99' },
    { src: '/images/HealthSub/Fragrance/4.jpg', name: 'Kim Kardashian True Reflection Women', description: 'Reveal your inner beauty with Kim Kardashian True Reflection Women, a luxurious and feminine fragrance.', price: '$59.99', shippingPrice: '$5.99' },
    { src: '/images/HealthSub/Fragrance/5.jpg', name: 'Thesor Purple', description: 'Discover the enchanting aroma of Thesor Purple, a delightful fragrance that leaves a lasting impression.', price: '$44.99', shippingPrice: '$5.49' },
    { src: '/images/HealthSub/Fragrance/6.jpg', name: 'Versace Men\'s Perfume', description: 'Exude confidence and sophistication with Versace Men\'s Perfume, a bold and masculine fragrance.', price: '$89.99', shippingPrice: '$6.99' }
  ],

  haircare: [
    { src: '/images/HealthSub/Haircare/1.jpg', name: 'Blonde Ponytail Extension', description: 'Transform your hairstyle instantly with the Blonde Ponytail Extension. This high-quality extension blends seamlessly with your natural hair, adding length and volume for a glamorous look.', price: '$29.99', shippingPrice: '$4.99' },
    { src: '/images/HealthSub/Haircare/2.jpg', name: 'Blow dryer brush', description: 'Achieve salon-quality blowouts at home with the Blow dryer brush. This innovative tool combines a blow dryer and brush in one, smoothing and styling hair effortlessly.', price: '$49.99', shippingPrice: '$5.99' },
    { src: '/images/HealthSub/Haircare/3.jpg', name: 'Designer Hair dresser', description: 'Elevate your hair care routine with the Designer Hair dresser. This premium dresser features multiple compartments and drawers for storing hair tools, accessories, and products in style.', price: '$79.99', shippingPrice: '$7.99' },
    { src: '/images/HealthSub/Haircare/4.jpg', name: 'Nioxin System 3 Trial Starter Kit', description: 'Revitalize thinning hair with the Nioxin System 3 Trial Starter Kit. This comprehensive kit includes shampoo, conditioner, and treatment to cleanse, optimize, and treat the scalp for thicker, fuller-looking hair.', price: '$39.99', shippingPrice: '$4.99' },
    { src: '/images/HealthSub/Haircare/5.jpg', name: 'Pack Of 3 Thermal Serum', description: 'Protect your hair from heat damage with the Pack Of 3 Thermal Serum. Formulated with nourishing oils, this serum adds shine and smoothness while shielding hair from styling heat.', price: '$24.99', shippingPrice: '$3.99' },
    { src: '/images/HealthSub/Haircare/6.jpg', name: 'Wella Colour Motion Shampoo & Conditioner', description: 'Maintain vibrant hair color with Wella Colour Motion Shampoo & Conditioner. This duo gently cleanses and conditions hair while preserving color intensity and luminosity.', price: '$34.99', shippingPrice: '$4.99' }
  ],  

  makeup: [
    { src: '/images/HealthSub/Makeup/1.jpg', name: '12 small grape beginner makeup brush sets', description: 'Enhance your makeup routine with the 12 small grape beginner makeup brush sets. This set includes essential brushes for applying foundation, eyeshadow, and more, ensuring flawless application every time.', price: '$24.99', shippingPrice: '$4.99' },
    { src: '/images/HealthSub/Makeup/2.jpg', name: 'Beauty sponge sets', description: 'Achieve a flawless complexion with the Beauty sponge sets. These soft, versatile sponges blend makeup seamlessly for an airbrushed finish. Ideal for applying foundation, concealer, and cream products.', price: '$14.99', shippingPrice: '$3.99' },
    { src: '/images/HealthSub/Makeup/3.jpg', name: 'Eye Set, 6 Piece Makeup Brush Kit', description: 'Create stunning eye looks with the Eye Set, 6 Piece Makeup Brush Kit. Featuring six essential brushes for precise eyeshadow application and blending, this kit is perfect for both beginners and makeup enthusiasts.', price: '$19.99', shippingPrice: '$3.99' },
    { src: '/images/HealthSub/Makeup/4.jpg', name: 'Lisa Eldridge Vega Eyeshadow Palette', description: 'Elevate your eyeshadow game with the Lisa Eldridge Vega Eyeshadow Palette. This versatile palette features a range of matte and shimmer shades, curated by makeup artist Lisa Eldridge for effortless eye looks.', price: '$39.99', shippingPrice: '$6.99' },
    { src: '/images/HealthSub/Makeup/5.jpg', name: 'Morphe Makeup, Brush Sets & Palettess', description: 'Discover Morphe Makeup, Brush Sets & Palettess, a must-have collection of makeup brushes and palettes. From bold eyeshadows to sculpting brushes, Morphe offers professional-quality tools for creating your signature makeup looks.', price: '$29.99', shippingPrice: '$5.99' },
    { src: '/images/HealthSub/Makeup/6.jpg', name: 'Rose Dune Palette', description: 'Embrace romantic hues with the Rose Dune Palette. This stunning eyeshadow palette features soft pinks, shimmering champagnes, and deep mauves for creating dreamy, ethereal eye looks.', price: '$34.99', shippingPrice: '$6.99' }
  ],  

  skincare: [
    { src: '/images/HealthSub/Skincare/1.jpg', name: 'Anti-ageing Eye Massager', description: 'Revitalize your eyes with the Anti-ageing Eye Massager, designed to reduce puffiness and diminish the appearance of fine lines. Gentle vibrations promote circulation and enhance the absorption of eye creams and serums.', price: '$29.99', shippingPrice: '$5.99' },
    { src: '/images/HealthSub/Skincare/2.jpg', name: 'Iope Stem3 Stemⅲ Skin Care', description: 'Experience the transformative power of Iope Stem3 Stemⅲ Skin Care. This advanced skincare regimen harnesses the power of plant stem cells to rejuvenate and restore skin\'s youthful radiance.', price: '$49.99', shippingPrice: '$7.99' },
    { src: '/images/HealthSub/Skincare/3.jpg', name: 'Serum for Eye Area', description: 'Nourish and hydrate the delicate eye area with the Serum for Eye Area. Formulated with potent antioxidants and peptides, this serum helps reduce dark circles and puffiness for brighter, more youthful-looking eyes.', price: '$39.99', shippingPrice: '$6.99' },
    { src: '/images/HealthSub/Skincare/4.jpg', name: 'SK-II - PITERA Kit', description: 'Discover the SK-II - PITERA Kit, a luxurious skincare set featuring the iconic Facial Treatment Essence enriched with PITERA™. This signature ingredient enhances skin\'s clarity and texture for a radiant, crystal-clear complexion.', price: '$99.99', shippingPrice: '$9.99' },
    { src: '/images/HealthSub/Skincare/5.jpg', name: 'Skin Care Set Kmart Superfruits Serum', description: 'Elevate your skincare routine with the Skin Care Set Kmart Superfruits Serum. Enriched with superfruit extracts and vitamins, this serum revitalizes skin, leaving it smooth, hydrated, and radiant.', price: '$19.99', shippingPrice: '$4.99' },
    { src: '/images/HealthSub/Skincare/6.jpg', name: 'True Botanicals Facialist Peel at Nordstrom', description: 'Transform your complexion with the True Botanicals Facialist Peel at Nordstrom. This gentle yet effective peel exfoliates and brightens skin, revealing a smoother, more radiant appearance.', price: '$59.99', shippingPrice: '$8.99' }
  ],  

  wellness: [
    { src: '/images/HealthSub/Wellness/1.jpg', name: 'Essential Oil Diffuser Dark Wood', description: 'Create a tranquil atmosphere with the Essential Oil Diffuser Dark Wood. This beautifully crafted diffuser combines functionality with aesthetic appeal, allowing you to enjoy the benefits of aromatherapy in any room.', price: '$39.99', shippingPrice: '$7.99' },
    { src: '/images/HealthSub/Wellness/2.jpg', name: 'Multifunctional Manual Six-wheel Neck Massager', description: 'Relieve tension and improve circulation with the Multifunctional Manual Six-wheel Neck Massager. Designed for versatility and effectiveness, this massager features six rotating wheels that target sore muscles and knots in the neck and shoulders.', price: '$29.99', shippingPrice: '$5.99' },
    { src: '/images/HealthSub/Wellness/3.jpg', name: 'Signature Fitness High Density Yoga Mat', description: 'Enhance your yoga practice with the Signature Fitness High Density Yoga Mat. Made from high-quality materials, this mat provides superior cushioning and support during workouts.', price: '$49.99', shippingPrice: '$8.99' },
    { src: '/images/HealthSub/Wellness/4.jpg', name: 'Thick Yoga Mats', description: 'Experience superior comfort with Thick Yoga Mats designed for optimal performance during yoga and exercise routines. These mats offer exceptional cushioning to protect your joints and muscles, making them ideal for both beginners and experienced yogis.', price: '$19.99', shippingPrice: '$4.99' },
    { src: '/images/HealthSub/Wellness/5.jpg', name: 'Vitruvi Black Stone Essential Oil Diffuser', description: 'Elevate your space with the Vitruvi Black Stone Essential Oil Diffuser. Crafted from high-quality ceramic and finished in sleek black stone, this diffuser adds a touch of modern elegance to any room.', price: '$59.99', shippingPrice: '$9.99' },
    { src: '/images/HealthSub/Wellness/6.jpg', name: 'Массажер Yunmai Massage Gun', description: 'Achieve deep muscle relaxation with the Массажер Yunmai Massage Gun. This powerful and portable device uses percussive therapy to target sore muscles and alleviate tension. Compact and rechargeable, it\'s perfect for use at home, in the gym, or on the go.', price: '$79.99', shippingPrice: '$12.99' }
  ],

  bath: [
    { src: '/images/HomeSub/bath/1.jpg', name: 'Bow mirror', description: 'Elegant bow-shaped mirror for your bathroom decor.', price: '$39.99', shippingPrice: '$7.99' },
    { src: '/images/HomeSub/bath/2.jpg', name: 'Cotton bath mat', description: 'Soft cotton bath mat for a comfortable and absorbent bath experience.', price: '$19.99', shippingPrice: '$5.99' },
    { src: '/images/HomeSub/bath/3.jpg', name: 'Cotton bath robe', description: 'Luxurious cotton bath robe for warmth and comfort after a bath or shower.', price: '$49.99', shippingPrice: '$9.99' },
    { src: '/images/HomeSub/bath/4.jpg', name: 'Nachi pink hooded kids towel', description: 'Cute and cozy pink hooded towel for kids, perfect for bath time.', price: '$14.99', shippingPrice: '$3.99' },
    { src: '/images/HomeSub/bath/5.jpg', name: 'Ribbed glass tumbler', description: 'Ribbed glass tumbler for storing bathroom essentials or as a decorative piece.', price: '$9.99', shippingPrice: '$2.99' },
    { src: '/images/HomeSub/bath/6.webp', name: 'Scented candles', description: 'Aromatic scented candles to create a relaxing atmosphere in your bathroom.', price: '$29.99', shippingPrice: '$5.99' },
  ],  

  bedding: [
    { src: '/images/HomeSub/bedding/1.jpg', name: 'Bed sham', description: 'Decorative bed sham to add elegance to your bedroom decor.', price: '$29.99', shippingPrice: '$5.99' },
    { src: '/images/HomeSub/bedding/2.jpg', name: 'Black table mirror', description: 'Elegant black table mirror for your dressing table or vanity.', price: '$39.99', shippingPrice: '$7.99' },
    { src: '/images/HomeSub/bedding/3.jpg', name: 'Blanket', description: 'Soft and cozy blanket for warmth and comfort during cold nights.', price: '$49.99', shippingPrice: '$9.99' },
    { src: '/images/HomeSub/bedding/4.jpg', name: 'Blue bed sheet set', description: 'Luxurious bed sheet set in soothing blue color for a peaceful sleep.', price: '$59.99', shippingPrice: '$9.99' },
    { src: '/images/HomeSub/bedding/5.jpg', name: 'Organic cotton white bedding set', description: 'Organic cotton bedding set for a sustainable and comfortable sleep environment.', price: '$79.99', shippingPrice: '$12.99' },
    { src: '/images/HomeSub/bedding/6.jpg', name: 'Pillows', description: 'Soft pillows for neck and head support to enhance your sleep quality.', price: '$19.99', shippingPrice: '$4.99' },
  ],  

  furniture: [
    { src: '/images/HomeSub/furniture/1.jpg', name: '3 piece l shaped sectional sofa', description: 'Modern and comfortable L-shaped sectional sofa for your living room.', price: '$999.99', shippingPrice: '$99.99' },
    { src: '/images/HomeSub/furniture/2.jpg', name: 'Bisou accent chair', description: 'Elegant accent chair with a stylish design and comfortable seating.', price: '$299.99', shippingPrice: '$49.99' },
    { src: '/images/HomeSub/furniture/3.jpg', name: 'Dining chair', description: 'Classic dining chair for your dining room with durable materials.', price: '$79.99', shippingPrice: '$19.99' },
    { src: '/images/HomeSub/furniture/4.jpg', name: 'Rove 6 dr dresser', description: 'Spacious 6-drawer dresser with a modern design for your bedroom.', price: '$499.99', shippingPrice: '$79.99' },
    { src: '/images/HomeSub/furniture/5.jpg', name: 'White accent chair by leanne ford', description: 'Stylish white accent chair designed by Leanne Ford for chic interiors.', price: '$249.99', shippingPrice: '$39.99' },
    { src: '/images/HomeSub/furniture/6.jpg', name: 'Wood coffee table', description: 'Natural wood coffee table with a minimalist design for your living space.', price: '$149.99', shippingPrice: '$29.99' },
  ],  

  homedecor: [
    { src: '/images/HomeSub/Home decor/1.jpg', name: 'Bamboo metal tray', description: 'Stylish bamboo tray with metal accents for home decoration.', price: '$39.99', shippingPrice: '$6.99' },
    { src: '/images/HomeSub/Home decor/2.jpg', name: 'Photo wall hanging picture frames', description: 'Set of elegant photo frames for wall hanging.', price: '$24.99', shippingPrice: '$4.99' },
    { src: '/images/HomeSub/Home decor/3.jpg', name: 'Sedona white totes', description: 'White totes from Sedona collection for storage and decor.', price: '$19.99', shippingPrice: '$3.99' },
    { src: '/images/HomeSub/Home decor/4.jpg', name: 'Wall clocks', description: 'Modern wall clocks to enhance your home interior.', price: '$49.99', shippingPrice: '$7.99' },
    { src: '/images/HomeSub/Home decor/5.jpg', name: 'Warrick ribbed white vase', description: 'Ribbed white vase for displaying flowers and decoration.', price: '$29.99', shippingPrice: '$4.99' },
    { src: '/images/HomeSub/Home decor/6.jpg', name: 'Wick scented candle', description: 'Scented candle with Wick branding for relaxing atmosphere.', price: '$14.99', shippingPrice: '$2.99' },
  ],  

  kitchenware: [
    { src: '/images/HomeSub/kitchen/1.jpg', name: '8 bottle cooler', description: 'Compact cooler for storing up to 8 bottles of beverages.', price: '$79.99', shippingPrice: '$9.99' },
    { src: '/images/HomeSub/kitchen/2.jpg', name: 'Blue stand mixer', description: 'Powerful stand mixer with blue color design.', price: '$199.99', shippingPrice: '$14.99' },
    { src: '/images/HomeSub/kitchen/3.jpg', name: 'Electric kettle with maple handle', description: 'Stylish electric kettle featuring a maple handle for easy grip.', price: '$49.99', shippingPrice: '$7.99' },
    { src: '/images/HomeSub/kitchen/4.jpg', name: 'Espresso Machine', description: 'Espresso machine for making delicious coffee at home.', price: '$299.99', shippingPrice: '$19.99' },
    { src: '/images/HomeSub/kitchen/5.jpg', name: 'Gleevers', description: 'Multi-purpose kitchen tool set named Gleevers.', price: '$29.99', shippingPrice: '$4.99' },
    { src: '/images/HomeSub/kitchen/6.jpg', name: 'oven', description: 'Modern oven for baking and cooking various dishes.', price: '$399.99', shippingPrice: '$29.99' },
  ],  

  outdoor: [
    { src: '/images/HomeSub/outdoor/1.jpg', name: 'Griddle with high shelves', description: 'Outdoor griddle with multiple high shelves for convenient cooking.', price: '$299.99', shippingPrice: '$19.99' },
    { src: '/images/HomeSub/outdoor/2.jpg', name: 'Hammock', description: 'Comfortable hammock for relaxing outdoors.', price: '$99.99', shippingPrice: '$9.99' },
    { src: '/images/HomeSub/outdoor/3.jpg', name: 'Ophelia planters', description: 'Decorative planters named Ophelia for outdoor use.', price: '$49.99', shippingPrice: '$7.99' },
    { src: '/images/HomeSub/outdoor/4.jpg', name: 'Outdoor storage box', description: 'Spacious outdoor storage box for storing various items.', price: '$149.99', shippingPrice: '$14.99' },
    { src: '/images/HomeSub/outdoor/5.jpg', name: 'Outdoor lantern', description: 'Elegant outdoor lantern for illuminating your outdoor spaces.', price: '$39.99', shippingPrice: '$5.99' },
    { src: '/images/HomeSub/outdoor/6.jpg', name: 'Wall Mounted 4 Box Planters', description: 'Wall-mounted planters with 4 boxes for planting various plants outdoors.', price: '$79.99', shippingPrice: '$9.99' },
  ],  

  actionfigures: [
    { src: '/images/ToysSub/Action/1.jpg', name: 'DC Heroes', description: 'Action figures of iconic DC comic book heroes.', price: '$19.99', shippingPrice: '$3.99' },
    { src: '/images/ToysSub/Action/2.jpg', name: 'Dragon ball z', description: 'Action figures from the popular anime series Dragon Ball Z.', price: '$24.99', shippingPrice: '$4.99' },
    { src: '/images/ToysSub/Action/3.jpg', name: 'Marvel Heroes', description: 'Action figures featuring Marvel superheroes.', price: '$29.99', shippingPrice: '$5.99' },
    { src: '/images/ToysSub/Action/4.jpg', name: 'Soldiers', description: 'Military action figures representing various branches and units.', price: '$14.99', shippingPrice: '$2.99' },
    { src: '/images/ToysSub/Action/5.jpg', name: 'Spider man', description: 'Action figures of the iconic Marvel superhero Spider-Man.', price: '$19.99', shippingPrice: '$3.99' },
    { src: '/images/ToysSub/Action/6.jpg', name: 'US Army', description: 'Action figures representing US Army personnel and equipment.', price: '$16.99', shippingPrice: '$2.99' },
  ],  

  boardgames: [
    { src: '/images/ToysSub/Board/1.webp', name: 'Carrom Board', description: 'Classic board game for family fun and strategic gameplay.', price: '$49.99', shippingPrice: '$7.99' },
    { src: '/images/ToysSub/Board/2.jpg', name: 'Chess Board', description: 'Traditional chess board game for intellectual challenge and strategy.', price: '$29.99', shippingPrice: '$5.99' },
    { src: '/images/ToysSub/Board/3.jpg', name: 'Code Breaker', description: 'Puzzle board game for decoding and logical thinking.', price: '$19.99', shippingPrice: '$3.99' },
    { src: '/images/ToysSub/Board/4.jpg', name: 'Ludo Board', description: 'Classic Ludo board game for family entertainment and competitive play.', price: '$14.99', shippingPrice: '$2.99' },
    { src: '/images/ToysSub/Board/5.jpg', name: 'Monopoly', description: 'Popular board game of property trading and strategy.', price: '$39.99', shippingPrice: '$6.99' },
    { src: '/images/ToysSub/Board/6.jpg', name: 'Shot Game', description: 'Drinking board game for parties and social gatherings.', price: '$24.99', shippingPrice: '$4.99' },
  ],  

  educationaltoys: [
    { src: '/images/ToysSub/Edu/1.jpg', name: 'A-Stem', description: 'Educational STEM toy for hands-on learning and creativity.', price: '$29.99', shippingPrice: '$4.99' },
    { src: '/images/ToysSub/Edu/2.jpg', name: 'Global', description: 'Interactive globe toy for exploring geography and world knowledge.', price: '$39.99', shippingPrice: '$5.99' },
    { src: '/images/ToysSub/Edu/3.webp', name: 'Im-Stem', description: 'Immersive STEM toy for building and experimenting with technology.', price: '$49.99', shippingPrice: '$6.99' },
    { src: '/images/ToysSub/Edu/4.jpg', name: 'Mini Scientifi Tools', description: 'Mini scientific tools set for conducting experiments and investigations.', price: '$19.99', shippingPrice: '$3.99' },
    { src: '/images/ToysSub/Edu/5.webp', name: 'Solar Robot-Stem', description: 'Solar-powered robot STEM toy for learning about renewable energy and robotics.', price: '$39.99', shippingPrice: '$5.99' },
    { src: '/images/ToysSub/Edu/6.jpg', name: 'Vehicle-Stem', description: 'Educational STEM toy focusing on vehicles and mechanics.', price: '$24.99', shippingPrice: '$3.99' },
  ],  

  outdoortoys: [
    { src: '/images/ToysSub/outdoor/1.webp', name: 'Bubble lawn mower', description: 'Fun bubble-making lawn mower toy for outdoor play.', price: '$24.99', shippingPrice: '$3.99' },
    { src: '/images/ToysSub/outdoor/2.webp', name: 'Play tents', description: 'Colorful and spacious play tents for kids to enjoy imaginative play outdoors.', price: '$39.99', shippingPrice: '$4.99' },
    { src: '/images/ToysSub/outdoor/3.jpg', name: 'Seesaw', description: 'Classic seesaw for two children to enjoy bouncing up and down.', price: '$49.99', shippingPrice: '$5.99' },
    { src: '/images/ToysSub/outdoor/4.jpg', name: 'Slider', description: 'Durable outdoor slider for kids to have fun sliding down.', price: '$59.99', shippingPrice: '$6.99' },
    { src: '/images/ToysSub/outdoor/5.avif', name: 'Toy 3 wheel cycle', description: 'Three-wheeled cycle toy for outdoor rides, suitable for young children.', price: '$79.99', shippingPrice: '$7.99' },
    { src: '/images/ToysSub/outdoor/6.jpg', name: 'Trampolines', description: 'Safe and sturdy trampolines for energetic outdoor bouncing fun.', price: '$199.99', shippingPrice: '$9.99' },
  ],  

  puzzles: [
    { src: '/images/ToysSub/puzzles/1.jpg', name: 'Carousel ball puzzle', description: 'Intricate 3D puzzle ball depicting a carousel scene.', price: '$29.99', shippingPrice: '$3.99' },
    { src: '/images/ToysSub/puzzles/2.jpg', name: 'Cube', description: 'Classic cube puzzle with colorful sides for challenging play.', price: '$19.99', shippingPrice: '$2.99' },
    { src: '/images/ToysSub/puzzles/3.jpg', name: 'Magnetic colour and number maze', description: 'Educational maze puzzle with magnetic pieces for learning colors and numbers.', price: '$24.99', shippingPrice: '$3.49' },
    { src: '/images/ToysSub/puzzles/4.webp', name: 'Number puzzle game', description: 'Interactive number puzzle game for children to improve numerical skills.', price: '$14.99', shippingPrice: '$1.99' },
    { src: '/images/ToysSub/puzzles/5.webp', name: 'Puzzle giraffe', description: 'Adorable giraffe-shaped puzzle for young puzzlers.', price: '$12.99', shippingPrice: '$1.49' },
    { src: '/images/ToysSub/puzzles/6.jpg', name: 'Ravensburger gingerbread house puzzle', description: 'Charming puzzle depicting a gingerbread house scene by Ravensburger.', price: '$34.99', shippingPrice: '$4.49' },
  ],  

  remotecontrol: [
    { src: '/images/ToysSub/remote/1.jpg', name: 'Baztoy RC car', description: 'High-speed remote-controlled car for racing enthusiasts.', price: '$39.99', shippingPrice: '$3.99' },
    { src: '/images/ToysSub/remote/2.jpg', name: 'Mario Kart', description: 'Iconic Mario Kart remote-controlled vehicle for gaming fans.', price: '$49.99', shippingPrice: '$4.99' },
    { src: '/images/ToysSub/remote/3.jpg', name: 'RC Helicopter', description: 'Durable remote-controlled helicopter for aerial maneuvers.', price: '$59.99', shippingPrice: '$5.99' },
    { src: '/images/ToysSub/remote/4.webp', name: 'RC plane', description: 'Remote-controlled plane for flying enthusiasts.', price: '$79.99', shippingPrice: '$6.99' },
    { src: '/images/ToysSub/remote/5.webp', name: 'RC Rock Crawler', description: 'Heavy-duty remote-controlled rock crawler for off-road adventures.', price: '$69.99', shippingPrice: '$6.49' },
    { src: '/images/ToysSub/remote/6.webp', name: 'Transformer RC Car', description: 'RC car that transforms into a robot, combining action and vehicle play.', price: '$89.99', shippingPrice: '$7.99' },
  ],
  // Similarly add details for other categories and products
};

const ProductPage = () => {
  const { category, productName } = useParams();
  const navigate = useNavigate();// Initialize useHistory
  const product = productDetails[category]?.find(p => p.name.toLowerCase().replace(/\s+/g, '-') === productName);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleOrderClick = () => {
    navigate('/payment-details'); // Navigate to the PaymentDetails page
  };

  return (
    <div>
      <UserHeader />
      <div className="product-page">
          < button className='backarrow' ><IoIosArrowRoundBack /></button>
        <div className="product-container">
          <div className="product-image-container">
            <img src={product.src} alt={product.name} className="product-image" />
          </div>
          <div className="product-details">
            <h1 className="product-title">{product.name}</h1>
            <p className="product-description">{product.description}</p>
            <p className="product-price"> {product.price}</p>
            <p className="product-shipping-price">Shipping : {product.shippingPrice}</p>
            <button className="order-button" onClick={handleOrderClick}>ORDER</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
