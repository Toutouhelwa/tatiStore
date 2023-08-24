import React, { useState } from "react";
export default function Categories({ setFilteredProducts, Products }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedBrand , setBrand] = useState("All Brands")
  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    if (category === "all") {
      setFilteredProducts(Products);
    } else {
      const filtered = Products.filter((product) => product.category === category);
      setFilteredProducts(filtered);
    }
  };
  const handelBrandChange = (e) => {
    const Brand = e.target.value;
    setBrand(Brand);
    if(Brand ==="All Brands") {
      setFilteredProducts(Products)
    }else{
      const filtred = Products.filter((product) => product.brand === Brand)
      setFilteredProducts(filtred)
    }

  }

  return (
    <div style={{display:"flex",alignItems:"center"}}>
      <select  style={{maxWidth:"70px"}} className = "categories-list"value={selectedCategory} onChange={handleCategoryChange}>
        <option value="all">All</option>
        <option value="smartphones">Smartphones</option>
        <option value="laptops">laptops</option>
        <option value="skincare">skincare</option>
        <option value="groceries">groceries</option>
        <option value="home-decoration">home-decoration</option>
          
      </select>
      <select  className = "categories-list"value={selectedBrand} onChange={handelBrandChange}>
      <option value="All Brands">All</option>
      <option value="Apple">Apple</option>
      <option value="Samsung">Samsung</option>
      <option value="Microsoft Surface">Microsoft Surface</option>
      <option value="Infinix">Infinix</option>
      <option value="HP Pavilion">HP Pavilion</option>
      <option value="Impression of Acqua Di Gio">Impression of Acqua Di Gio</option>
      <option value="Royal_Mirage">Royal_Mirage</option>
      <option value="Fog Scent Xpressio">Fog Scent Xpressio</option>
      <option value="Munakh">Munakh</option>
      <option value="Lord - Al-Rehab">Lord - Al-Rehab</option>
      <option value="L'Oreal Paris">L'Oreal Paris</option>
      <option value="Hemani Tea">Hemani Tea</option>
      <option value="Dermive">Dermive</option>
      <option value="ROREC White Rice">ROREC White Rice</option>
      <option value="Fair & Clear">Fair & Clear</option>
      <option value="Saaf & Khaas">Saaf & Khaas</option>
      <option value="Bake Parlor Big">Bake Parlor Big</option>
      <option value="Baking Food Items">Baking Food Items</option>
      <option value="Dry">Dry</option>
      <option value="Boho Decor">Boho Decor</option>
      <option value="Flying Wooden">Flying Wooden</option>
      <option value="LED Lights">LED Lights</option>
      <option value="Golden">Golden</option>

      
    </select>

    </div>
    
  );
}
