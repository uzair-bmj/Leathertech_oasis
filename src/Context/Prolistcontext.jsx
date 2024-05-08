import { createContext, useState } from "react";


const Productlist = createContext()

const Prolistcontext = ({ children }) => {

    const [phone, setphone] = useState(
        [
            {
                imgurl: "https://static-01.daraz.pk/p/f4a07829d49480a8efd401318e7b2437.jpg_300x0q75.webp",
                Productname: "iPhone 15 pro max",
                productPrice: "899",
                stars: 5,
                reviews: "500+"
            },
            {
                imgurl: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/i/a/r/-original-imagtrf9qm3dufq9.jpeg?q=70",
                Productname: "Google Pixel 7",
                productPrice: "799",
                stars: 5,
                reviews: "300+"
            },
            {
                imgurl: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/q/k/h/-original-imagzm8qmr7qxfhq.jpeg?q=70",
                Productname: "Samsung S23 Ultra",
                productPrice: "899",
                stars: 5,
                reviews: "1000+"
            },
            {
                imgurl: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/y/l/p/-original-imaghxemc3wtcuhb.jpeg?q=70",
                Productname: "iPhone 14 pro",
                productPrice: "999",
                stars: 5,
                reviews: "500+"
            },
            {
                imgurl: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/o/w/a/-original-imagdc87gdyremd3.jpeg?q=70",
                Productname: "Samsung galaxy m32",
                productPrice: "299",
                stars: 5,
                reviews: "1200+"
            },
            {
                imgurl: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/t/u/m/-original-imaggsuehy3nyj3b.jpeg?q=70",
                Productname: "Google Pixel 7 pro",
                productPrice: "1199",
                stars: 5,
                reviews: "1500+"
            },
            {
                imgurl: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/3/p/e/-original-imagx9eg3nze8ctg.jpeg?q=70",
                Productname: "Samsung S24 Ultra",
                productPrice: "1299",
                stars: 5,
                reviews: "500+"
            },
            {
                imgurl: "https://static-01.daraz.pk/p/9dcc00a2a025c077673c25ffc9870125.jpg_300x0q75.webp",
                Productname: "iphone 13 pro max",
                productPrice: "399",
                stars: 5,
                reviews: "1000+"
            },
            {
                imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl2m9N98kU8_UoSweznaeKmvRJ3U6peBQTv5B-9Pqn4Q&s",
                Productname: "Google Pixel 6",
                productPrice: "699",
                stars: 5,
                reviews: "1000+"
            },
        ])
    const [watches, setwatches] = useState(
        [
            {
                imgurl: "https://rukminim2.flixcart.com/image/612/612/ku8pbbk0/smartwatch/6/r/o/ios-mkhv3hn-a-apple-yes-original-imag7eqygrfzpzvy.jpeg?q=70",
                Productname: "Apple watch series 7",
                productPrice: "999",
                stars: 5,
                reviews: "500+"
            },
            {
                imgurl: "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/i/o/6/-original-imaghxghyggtah94.jpeg?q=70",
                Productname: "Apple watch SG GPS",
                productPrice: "399",
                stars: 5,
                reviews: "500+"
            },
            {
                imgurl: "https://rukminim2.flixcart.com/image/612/612/ku8pbbk0/smartwatch/x/w/8/ios-mkhw3hn-a-apple-yes-original-imag7eqypz9zkbn3.jpeg?q=70",
                Productname: "Apple watch Series 9",
                productPrice: "999",
                stars: 5,
                reviews: "2000+"
            },
            {
                imgurl: "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/p/q/n/-original-imagz6mxharafcf7.jpeg?q=70",
                Productname: "Spark Watch",
                productPrice: "299",
                stars: 5,
                reviews: "500+"
            },
            {
                imgurl: "https://zerolifestyle.co/cdn/shop/files/ProGoldtopviewwithoutBG.webp?v=1705994919",
                Productname: "Matrix Smart Watch",
                productPrice: "399",
                stars: 5,
                reviews: "500+"
            },
            {
                imgurl: "https://zerolifestyle.co/cdn/shop/files/terra-blue-01_af13f679-5ca5-4406-bf38-55f1cd1c2ab8.png?v=1683221322",
                Productname: "Terra Fit Smart Watch",
                productPrice: "399",
                stars: 5,
                reviews: "2000+"
            },
            {
                imgurl: "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/a/z/n/46-android-ios-txsmdwwsmwepicslvrblk01-txor-yes-original-imagr2nfgbrvrmva.jpeg?q=70",
                Productname: "TXOR EPIC ULTRA",
                productPrice: "99",
                stars: 5,
                reviews: "500+"
            },
            {
                imgurl: "https://zerolifestyle.co/cdn/shop/files/switch1.png?v=1689669288",
                Productname: "Phantom Watch",
                productPrice: "699",
                stars: 5,
                reviews: "500+"
            },
            {
                imgurl: "https://zerolifestyle.co/cdn/shop/files/RevoltBlack01.webp?v=1697201855",
                Productname: "Revoltt Smart Watch",
                productPrice: "799",
                stars: 5,
                reviews: "2000+"
            },
            

        ])

    const [jackets, setjackets] = useState(
        [
            {
                imgurl: "https://images.pexels.com/photos/20232807/pexels-photo-20232807/free-photo-of-model-in-a-brown-leather-jacket-and-gray-sweater-posing-on-a-footbridge.jpeg?auto=compress&cs=tinysrgb&w=600",
                Productname: "Leather Jacket",
                productPrice: "999",
                stars: 5,
                reviews: "1000+"
            },
            {
                imgurl: "https://images.pexels.com/photos/19187100/pexels-photo-19187100/free-photo-of-man-in-black-jacket.jpeg?auto=compress&cs=tinysrgb&w=600",
                Productname: "Leather Jacket",
                productPrice: "1099",
                stars: 5,
                reviews: "500+"
            },
            {
                imgurl: "https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=600",
                Productname: "Leather Jacket",
                productPrice: "299",
                stars: 5,
                reviews: "1500"
            },
            {
                imgurl: "https://images.pexels.com/photos/19196517/pexels-photo-19196517/free-photo-of-man-in-sunglasses-and-black-jacket-on-street.jpeg?auto=compress&cs=tinysrgb&w=600",
                Productname: "Leather Jacket",
                productPrice: "399",
                stars: 5,
                reviews: "2000+"
            },
            {
                imgurl: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?q=80&w=1492&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                Productname: "Leather Jacket",
                productPrice: "999",
                stars: 5,
                reviews: "1000+"
            },
            {
                imgurl: "https://images.unsplash.com/photo-1606715791286-6e43e9838f44?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                Productname: "Leather Jacket",
                productPrice: "999",
                stars: 5,
                reviews: "600+"
            },
            {
                imgurl: "https://images.unsplash.com/photo-1584380536747-9cd3b6c716d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
                Productname: "Leather Jacket",
                productPrice: "999",
                stars: 5,
                reviews: "200+"
            },
            
        ])
    const [wallets, setwallets] = useState(
        [
            {
                imgurl: "https://rukminim2.flixcart.com/image/612/612/xif0q/wallet-card-wallet/t/o/m/oliver-1-3-7-ubf107blk1017-6-wallet-urban-forest-4-5-original-imagzhg4yyzqdyhk.jpeg?q=70",
                Productname: "Leather Wallet",
                productPrice: "99",
                stars: 5,
                reviews: "600+"
            },
            {
                imgurl: "https://rukminim2.flixcart.com/image/612/612/kyeqjrk0/wallet-card-wallet/4/a/x/doger-4-5-1-rg170gr-10-wallet-rigohill-3-5-original-imaganfuyqjz6zzn.jpeg?q=70",
                Productname: "Leather Wallet",
                productPrice: "59",
                stars: 5,
                reviews: "300+"
            },
            {
                imgurl: "https://rukminim2.flixcart.com/image/612/612/xif0q/accessories-combo/k/m/f/ubf000wra4532-urban-forest-original-imagpzzysmcwmnsh.jpeg?q=70",
                Productname: "Leather Wallet",
                productPrice: "99",
                stars: 5,
                reviews: "1000+"
            },
            {
                imgurl: "https://rukminim2.flixcart.com/image/612/612/xif0q/wallet-card-wallet/3/y/2/genuine-leather-wallet-for-men-prv201-wallet-provogue-original-imagp8r6hpkpwwgs.jpeg?q=70",
                Productname: "Blue Leather Wallet",
                productPrice: "49",
                stars: 5,
                reviews: "500+"
            },
            {
                imgurl: "https://images.unsplash.com/photo-1614330316655-51dbca10f5f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxlYXRoZXIlMjB3YWxsZXRzfGVufDB8MXwwfHx8MA%3D%3D",
                Productname: "Leather Wallet",
                productPrice: "39",
                stars: 5,
                reviews: "400+"
            },
            {
                imgurl: "https://rukminim2.flixcart.com/image/612/612/kx6fwcw0/wallet-card-wallet/b/p/a/nova-egc102blu1055-wallet-eagle-crest-original-imag9zxckez2x8cv.jpeg?q=70",
                Productname: "Leather Wallet",
                productPrice: "49",
                stars: 5,
                reviews: "100+"
            },
            {
                imgurl: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxlYXRoZXIlMjB3YWxsZXRzfGVufDB8MXwwfHx8MA%3D%3D",
                Productname: "Leather Wallet",
                productPrice: "149",
                stars: 5,
                reviews: "1500+"
            },
            {
                imgurl: "https://rukminim2.flixcart.com/image/612/612/xif0q/wallet-card-wallet/t/q/d/nicolas-1-9-mw190gr-9-wallet-hornbull-2-original-imagsyc5esk3wmxg.jpeg?q=70",
                Productname: "Leather Wallet",
                productPrice: "99",
                stars: 5,
                reviews: "100+"
            },
            
        ])
    const [prodetail , setprodetail ] = useState([])




    return (
        <>
            <Productlist.Provider value={{ phone, setphone, watches, setwatches, jackets, setjackets , wallets , setwallets , prodetail , setprodetail }}>
                {children}
            </Productlist.Provider>

        </>
    )

}

export default Prolistcontext;
export { Productlist }