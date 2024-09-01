import { Link } from "react-router-dom";
import appemidi from "../assets/appemidi_mango.jpeg";
import bluerose from "../assets/Blore_rose_grapes.jpeg";
import onion from "../assets/Blore_rose_onion.jpeg";
import chilli from "../assets/Byadgi Chilli.jpeg";
import orange from "../assets/coorg_orange.jpeg";
import beetleleaf from "../assets/Mysore_beetleleaf.jpeg";
import banana from "../assets/nanjangud_banana.jpeg";
import { FaShoppingCart } from "react-icons/fa";


export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/About" },
  { label: "Contact", href: "/Contact" },
  {
    label: (
      <div className="text-2xl cursor-pointer relative">
        <Link to="/Cart">
          <FaShoppingCart />
        </Link>
      </div>
    ),
    // href: "/Products",
  },
];

export const products = [
  {
    id: 1,
    name: "Appemidi Mango",
    image: appemidi,
    description:
      "A tropical delight renowned for its vibrant flavor and juicy sweetness.",
    price: "Rs. 5.45",
    // about: () => (
    //   <>
    //     <div>
    //       <p>
    //         Appemidi Mango, often referred to as the "King of Pickling Mangos,"
    //         is a rare and cherished variety native to the Western Ghats of
    //         Karnataka, India. Renowned for its unique aroma, firm texture, and
    //         unparalleled flavor, Appemidi Mangoes have been a staple in
    //         traditional South Indian households for centuries, particularly for
    //         making the most authentic and flavorful pickles.
    //       </p>
    //       <br />
    //       <h2 className="font-bold">Key Features: </h2>
    //       <p className="">
    //         <li>
    //           Authentic Variety: Sourced directly from the lush forests of Udupi
    //           and surrounding regions, where these mangoes have been cultivated
    //           and cherished for generations.
    //         </li>
    //         <li>
    //           Unique Flavor: Known for its slightly tangy and pungent taste,
    //           which intensifies as it matures, making it perfect for pickling.
    //         </li>{" "}
    //         <li>
    //           Firm and Crisp: The firm texture ensures that the mangoes maintain
    //           their shape and crunchiness even after being pickled, adding a
    //           delightful bite to every serving.{" "}
    //         </li>
    //         <li>
    //           Natural and Organic: Grown without the use of synthetic pesticides
    //           or fertilizers, ensuring a pure and natural product.
    //         </li>{" "}
    //         <li>
    //           Rich Heritage: Traditionally used in making "Uppinakayi" or
    //           "Appemidi Pickle," a delicacy that holds a special place in the
    //           culinary traditions of South India.
    //         </li>
    //       </p>
    //       <br />

    //       <h2 className="font-bold">How to Use : </h2>
    //       <p className="">
    //         <li>
    //           Pickling: Ideal for making traditional mango pickles. Combine with
    //           spices, oil, and salt to create a long-lasting and flavorful
    //           condiment.
    //         </li>
    //         <li>
    //           Culinary Delights: Use in chutneys, salads, or as a tangy addition
    //           to various dishes for an authentic South Indian flavor.
    //         </li>{" "}
    //         <li>
    //           Gifting: A perfect gift for those who appreciate traditional and
    //           regional flavors, bringing a piece of Karnataka's rich culinary
    //           heritage to their kitchens.
    //         </li>
    //       </p>

    //       <br />

    //       <h2 className="font-bold">Storage: </h2>
    //       <p>
    //         Store in a cool, dry place away from direct sunlight. Once pickled,
    //         keep in an airtight container to preserve freshness and flavor.
    //       </p>
    //       <br />

    //       <h2 className="font-bold">Packaging: </h2>
    //       <p>
    //         Available in eco-friendly packaging to retain freshness and quality.
    //         Choose from various quantities to suit your pickling needs.
    //       </p>
    //     </div>
    //   </>
    // );
  },
  {
    id: 2,
    name: "Bengaluru Blue Grapes",
    image: bluerose,
    description:
      "A tropical delight renowned for its vibrant flavor and juicy sweetness.",
    price: "Rs. 5.45",
    // about: (
    //   <div>
    //     <p>
    //       Bengaluru Blue Grapes, also known as Bangalore Blue, are a unique and
    //       cherished grape variety grown in the Nandi Hills region of Karnataka,
    //       India. These grapes are known for their deep blue color, rich
    //       sweetness, and slightly tangy taste, making them perfect for both
    //       table consumption and winemaking.
    //     </p>
    //     <br />
    //     <h2 className="font-bold">Key Features: </h2>
    //     <p className="">
    //       <li>
    //         Unique Flavor: Combines sweetness with a hint of tartness, offering
    //         a delightful balance that is loved by grape enthusiasts.
    //       </li>
    //       <li>
    //         Rich Color: The deep blue to purple hue of these grapes makes them
    //         visually appealing and adds vibrancy to any dish.
    //       </li>
    //       <li>
    //         Versatile Use: Ideal for fresh consumption, juicing, or even as an
    //         ingredient in desserts and salads.
    //       </li>
    //       <li>
    //         High Antioxidants: Rich in natural antioxidants, making them a
    //         healthy choice for regular consumption.
    //       </li>
    //       <li>
    //         Local Heritage: Grown in the fertile soil of Nandi Hills, these
    //         grapes are a proud product of Karnataka's agricultural heritage.
    //       </li>
    //     </p>
    //     <br />

    //     <h2 className="font-bold">How to Use : </h2>
    //     <p className="">
    //       <li>
    //         Fresh Consumption: Enjoy as a healthy snack or part of a fruit
    //         salad.
    //       </li>
    //       <li>
    //         Juicing: Create refreshing juices that capture the essence of these
    //         unique grapes.
    //       </li>
    //       <li>
    //         Wine Making: Known for their use in making locally popular wines
    //         with a distinct flavor profile.
    //       </li>
    //       <li>
    //         Desserts: Perfect for use in tarts, cakes, or other grape-based
    //         desserts.
    //       </li>
    //     </p>

    //     <br />

    //     <h2 className="font-bold">Storage: </h2>
    //     <p>
    //       Store in a cool, dry place, preferably in the refrigerator, to
    //       maintain freshness. Best consumed within a week of purchase.
    //     </p>
    //     <br />

    //     <h2 className="font-bold">Packaging: </h2>
    //     <p>
    //       Available in eco-friendly packaging, ensuring the grapes remain fresh
    //       and protected during transit.
    //     </p>
    //   </div>
    // ),
  },
  {
    id: 3,
    name: "Bengaluru Rose Onions",
    image: onion,
    description:
      "A tropical delight renowned for its vibrant flavor and juicy sweetness.",
    price: "Rs. 5.45",
    // about: (
    //   <div>
    //     <p>
    //       Bengaluru Rose Onions, a premium variety of small, pinkish-red onions,
    //       are prized for their mild sweetness, crisp texture, and pungent
    //       flavor. Grown primarily in and around Bengaluru, these onions are an
    //       integral part of South Indian cuisine and are particularly favored for
    //       pickling and garnishing.
    //     </p>
    //     <br />
    //     <h2 className="font-bold">Key Features: </h2>
    //     <p className="">
    //       <li>
    //         Mild and Sweet: Offers a balanced flavor profile with a hint of
    //         sweetness, making it ideal for raw consumption and cooking.
    //       </li>
    //       <li>
    //         Crisp Texture: Maintains a satisfying crunch when used in salads or
    //         as a garnish.
    //       </li>
    //       <li>
    //         Small and Uniform: Uniformly sized, making them perfect for pickling
    //         and creating visually appealing dishes.
    //       </li>
    //       <li>
    //         Versatile Use: Essential in various South Indian dishes, chutneys,
    //         and pickles.
    //       </li>
    //       <li>
    //         Traditional Cultivation: Grown using traditional methods, ensuring
    //         sustainability and quality.
    //       </li>
    //     </p>
    //     <br />

    //     <h2 className="font-bold">How to Use : </h2>
    //     <p className="">
    //       <li>
    //         Garnishing: Use as a topping for salads, curries, or snacks for an
    //         added burst of flavor.
    //       </li>
    //       <li>
    //         Pickling: Ideal for making traditional pickles that are tangy and
    //         flavorful.
    //       </li>
    //       <li>
    //         Cooking: Incorporate into curries, sambar, or rasam for an authentic
    //         South Indian taste.
    //       </li>
    //     </p>

    //     <br />

    //     <h2 className="font-bold">Storage: </h2>
    //     <p>
    //       Store in a cool, dry place with good ventilation to prevent spoilage.
    //     </p>
    //     <br />

    //     <h2 className="font-bold">Packaging: </h2>
    //     <p>
    //       Available in biodegradable packaging, preserving the freshness and
    //       flavor of the onions while being environmentally friendly.
    //     </p>
    //   </div>
    // ),
  },
  {
    id: 4,
    name: "Byadgi Chilli",
    image: chilli,
    description:
      "A tropical delight renowned for its vibrant flavor and juicy sweetness.",
    price: "Rs. 5.45",
    // about: (
    //   <div>
    //     <p>
    //       Byadgi Chilli, one of the most famous chilli varieties from India, is
    //       celebrated for its deep red color and moderate heat. Sourced from the
    //       Byadgi region of Karnataka, these chillies are a staple in Indian
    //       kitchens, known for imparting rich color and flavor without
    //       overwhelming spiciness.
    //     </p>
    //     <br />
    //     <h2 className="font-bold">Key Features: </h2>
    //     <p className="">
    //       <li>
    //         Deep Red Color: Adds a vibrant red hue to dishes, making them
    //         visually appealing.
    //       </li>
    //       <li>
    //         Moderate Heat: Offers a balanced level of spiciness, suitable for a
    //         wide range of palates.
    //       </li>
    //       <li>
    //         Rich Flavor: Imparts a deep, smoky flavor that enhances the taste of
    //         curries, sauces, and marinades.
    //       </li>
    //       <li>
    //         Low Seed Content: Ensures more flesh and less heat, making it ideal
    //         for use in powders and pastes.
    //       </li>
    //       <li>
    //         Traditional Farming: Grown using traditional methods in Karnataka,
    //         ensuring authenticity and quality.
    //       </li>
    //     </p>
    //     <br />

    //     <h2 className="font-bold">How to Use : </h2>
    //     <p className="">
    //       <li>
    //         Spice Blends: Perfect for making authentic Indian spice mixes like
    //         garam masala.
    //       </li>
    //       <li>
    //         Curries and Sauces: Use in curries, sauces, and marinades to add
    //         color and flavor.
    //       </li>
    //       <li>Pickling: Adds a vibrant color and mild heat to pickles.</li>
    //       <li>Chilli Powder: Grind into powder for everyday use in cooking.</li>
    //     </p>

    //     <br />

    //     <h2 className="font-bold">Storage: </h2>
    //     <p>
    //       Store in an airtight container in a cool, dry place to maintain
    //       freshness and color.
    //     </p>
    //     <br />

    //     <h2 className="font-bold">Packaging: </h2>
    //     <p>
    //       Available in moisture-proof packaging to retain the color, flavor, and
    //       freshness of the chillies.
    //     </p>
    //   </div>
    // ),
  },
  {
    id: 5,
    name: "Coorg Orange",
    image: orange,
    description:
      "A tropical delight renowned for its vibrant flavor and juicy sweetness.",
    price: "Rs. 5.45",
    // about: (
    //   <div>
    //     <p>
    //       Coorg Orange, a unique variety of orange from the lush hills of Coorg
    //       in Karnataka, is known for its distinct flavor, aromatic zest, and
    //       bright orange color. Unlike regular oranges, Coorg Oranges have a
    //       slightly tangy and sweet taste, making them a favorite in both fresh
    //       consumption and culinary uses.
    //     </p>
    //     <br />
    //     <h2 className="font-bold">Key Features: </h2>
    //     <p className="">
    //       <li>
    //         Distinct Flavor: Combines tanginess with a subtle sweetness,
    //         offering a unique taste experience.
    //       </li>
    //       <li>
    //         Aromatic Zest: The peel is rich in aromatic oils, perfect for
    //         zesting in baking and cooking.
    //       </li>
    //       <li>
    //         Bright Color: The vibrant orange color makes it visually appealing
    //         for fresh consumption and garnishing.
    //       </li>
    //       <li>
    //         Versatile Use: Ideal for juices, marmalades, desserts, and
    //         garnishes.
    //       </li>
    //       <li>
    //         Grown in Coorg: Cultivated in the fertile, misty hills of Coorg,
    //         known for its rich soil and unique climate, which impart distinct
    //         characteristics to the fruit.
    //       </li>
    //     </p>
    //     <br />

    //     <h2 className="font-bold">How to Use : </h2>
    //     <p className="">
    //       <li>
    //         Juicing: Enjoy fresh juice that captures the unique flavor of Coorg
    //         Oranges.
    //       </li>
    //       <li>
    //         Marmalade: Make homemade marmalade with a perfect balance of sweet
    //         and tangy flavors.
    //       </li>
    //       <li>
    //         Desserts: Use in cakes, tarts, and other desserts for a citrusy
    //         twist.
    //       </li>
    //       <li>
    //         Zesting: Use the aromatic zest in baking, cooking, or cocktails.
    //       </li>
    //     </p>

    //     <br />

    //     <h2 className="font-bold">Storage: </h2>
    //     <p>Store in a cool, dry place. For extended freshness, refrigerate.</p>
    //     <br />

    //     <h2 className="font-bold">Packaging: </h2>
    //     <p>
    //       Available in eco-friendly packaging that preserves the freshness and
    //       quality of the fruit.
    //     </p>
    //   </div>
    // ),
  },
  {
    id: 6,
    name: "Mysore Beetle Leaf",
    image: beetleleaf,
    description:
      "A tropical delight renowned for its vibrant flavor and juicy sweetness.",
    price: "Rs 5.45",
  },
  {
    id: 7,
    name: "Nanjangud Banana",
    image: banana,
    description:
      "A tropical delight renowned for its vibrant flavor and juicy sweetness.",
    price: "Rs. 5.45",
  },
  {
    id: 8,
    name: "Gulbarga Tur Dal",
    description: "Spicy and aromatic chili.",
    price: "Rs. 160/kg",
    image:
      "https:diligentias.com/wp-content/uploads/2019/08/Gulbarga-tur-dal.jpeg",
  },
  {
    id: 9,
    name: "Mysore Pak",
    description: "Spicy and aromatic chili.",
    price: "Rs. 150/kg",
    image:
      "https:b.zmtcdn.com/data/pictures/chains/8/20961548/6423a3c40258a18443fa6ba4eb83ecb2.jpg",
  },
  {
    id: 10,
    name: "Coorg Cardamom",
    description: "Spicy and aromatic chili.",
    price: "Rs. 300/kg",
    image:
      "https:d3kgrlupo77sg7.cloudfront.net/media/chococoorgspice.com/images/products/coorg-green-cardamom-coorg.20230817031948.webp",
  },
  {
    id: 11,
    name: "Malabar Pepper",
    description: "Spicy and aromatic chili.",
    price: "Rs. 50/kg",
    image:
      "https:cdn11.bigcommerce.com/s-gs4bhgxm4q/images/stencil/2560w/products/504/817/Tiger_Pepper__43495.1625919390.jpg?c=2",
  },
  {
    id: 12,
    name: "Guntur Sannam Chiili",
    description: "Spicy and aromatic chili.",
    price: "Rs. 250/kg",
    image:
      "https://5.imimg.com/data5/XB/XL/MY-36677402/red-hot-chili-peppers-3-500x500-500x500.jpg",
  },
  {
    id: 13,
    name: "Bangenapalle Mango",
    description: "Spicy and aromatic chili.",
    price: "Rs. 150/kg",
    image:
      "https://tiimg.tistatic.com/fp/1/004/991/fresh-banganapalli-mango-fruits-585.jpg",
  },
  {
    id: 14,
    name: "Kodaikanal Poondu",
    description: "Spicy and aromatic chili.",
    price: "Rs. 110/kg",
    image:
      "https://th.bing.com/th/id/OIP.YqVbFt8HglDWS2E6SLJjSAAAAA?rs=1&pid=ImgDetMain",
  },
];

export const Categories = [
  {
    category: "fruits",
    productImage: [
      "https:media.istockphoto.com/vectors/fruits-and-berries-healthy-food-flat-style-vector-illustration-vector-id866764352?k=6&m=866764352&s=170667a&w=0&h=CRQuWo4beILl3LJ9kiPZnPoPZ97X8OQ_iUDPGLus3K4=",
    ],
  },
  {
    category: "vegetables",
    productImage: [
      "https:img.freepik.com/premium-photo/beautiful-garden-with-vegetables-watercolor-vegetable-clipart-illustration_962764-72497.jpg",
    ],
  },
  {
    category: "sweets",
    productImage: ["https:wallpaperaccess.com/full/1317252.jpg"],
  },
  {
    category: "Handicraft",
    productImage: [
      "https:d96xf8nw30hcy.cloudfront.net/SFImage/Images/handicraft-of-west-bengal61c0f5e313a06dce84b1ff000062a8f2.jpg",
    ],
  },
  {
    category: "Agricultural",
    productImage: [
      "https:u7.uidownload.com/vector/456/657/vector-agricultural-products-icons-colorful-classic-3d-sketch-ai-eps.jpg",
    ],
  },
  {
    category: "Handlooms",
    productImage: [
      "https:th.bing.com/th/id/OIP.hMysM_F1iqEjLDeJtFSKCwHaG6?rs=1&pid=ImgDetMain",
    ],
  },
  {
    category: "Textiles",
    productImage: [
      "https:cdn3.iconfinder.com/data/icons/eco-textile/2000/Global_Organic_Textile-01-512.png",
    ],
  },
  {
    category: "Accessories",
    productImage: [
      "https:static.vecteezy.com/system/resources/previews/000/161/078/original/vector-accessories-icon-pack.jpg",
    ],
  },
  {
    category: "HomeDecor",
    productImage: [
      "https:cdn0.iconfinder.com/data/icons/home-decoration-v1-0b/64/18-512.png",
    ],
  },
  {
    category: "WallPainting",
    productImage: [
      "https:cdn.dribbble.com/users/34270/screenshots/907043/icon.png",
    ],
  },
  {
    category: "grains",
    productImage: [
      "https:th.bing.com/th/id/OIP.yjkpE0Kohqzfy7pzaIdwaAHaIl?rs=1&pid=ImgDetMain",
    ],
  },
];

export const testimonials = [
  {
    name: "John Doe",
    review:
      "FastKart has the freshest groceries delivered right to my door. Highly recommended!",
    rating: 5,
  },
  {
    name: "Jane Smith",
    review:
      "Great service and amazing quality products. I love shopping at FastKart.",
    rating: 4,
  },
  {
    name: "Jaswanth",
    review: "The products are really good!",
    rating: 3,
  },
  {
    name: "Jack George",
    review:
      "Amazing quality of products! The service is amazing and customer support is outstanding!!",
    rating: 5,
  },
];
