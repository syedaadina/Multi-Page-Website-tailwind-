import Image from "next/image";
function About(){
    return(
        <main className="bg-gray-200 min-h-screen overflow-hidden m-0">
        <Image className="mt-20 mx-auto rounded-full md:hidden"
        width={200}
        height={100}
        src="/aboutus.jpg"
        alt="about us"
    />
    
        <div className="flex gap-4">
    <div className="mx-auto md:mt-32" >
    <h2 className="font-serif font-extrabold text-gray-900 text-[35px] ml-24 ">Welcome</h2> 
    <p className="font-serif text-[15px] font-extrabold text-pink-800 text-justify w-64 mx-auto md:w-[500px]">At Libraz Beauty Salon Located in Karachi, we are dedicated to providing you with the highest quality beauty and wellness services. Our team of experienced professionals specializes in a variety of treatments,including haircuts, styling facials manicures and more.We believe that everyone deserves to look and feel their best, and we strive to create a relaxing and enjoyable experience for all our clients.</p>
    <h3 className="font-serif text-[30px] font-extrabold text-gray-900">Our mission is simple!</h3>
    <p className="font-serif text-[15px] font-extrabold text-pink-800 text-justify w-64 mx-auto md:w-[500px]">To ensure your satisfaction with every visit. We take pride in our attention to detail and our commitment to using only the best products available. Our skilled stylists and beauty experts are passionate about their craft and are always ready to listen to your needs and preferences, ensuring you leave our parlor feeling rejuvenated and confident.</p>
    </div>
    <Image className="mt-20 mx-auto rounded-full hidden md:block"
        width={400}
        height={400}
        src="/aboutus.jpg"
        alt="about us"
    />
    
    
    </div>

    
    </main>
    )
}
export default About;