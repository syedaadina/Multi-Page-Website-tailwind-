import React from 'react';

interface ServiceCardProps {
  title: string;
  services: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, services }) => {
  return (
    <div className="bg-pink-500 w-full sm:w-[320px] px-6 py-4 rounded-lg shadow-md">
      <h3 className="font-serif font-extrabold text-[35px] text-pink-950 text-center">
        {title}
      </h3>
      <nav>
        <ul className="font-serif text-yellow-300 font-extrabold mt-4">
          {services.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

const Services: React.FC = () => {
  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat max-w-screen-2xl mx-auto overflow-hidden m-0"
      style={{ backgroundImage: "url('/services.jpg')" }}
    >
      <main className="px-4">
        <h2 className="font-serif font-extrabold text-[50px] text-pink-50 text-center mt-2">
          Our services
        </h2>
        <div className="flex flex-wrap justify-center gap-5 mt-28">
          <ServiceCard
            title="Hair color"
            services={[
              "Root touch-up----------$60+",
              "Partial Highlight----------$120+",
              "Partial w/Color----------$145+",
              "Full Highlight----------$180+",
              "Full w/Color----------$235+",
              "Dimensional 3 color---------$155+",
              "Color Correction----------$200/hr",
            ]}
          />
          <ServiceCard
            title="Hair Cut"
            services={[
              "Women's Dry----------$15",
              "Shampoo/Cut/----------$20",
              "Shampoo/Cut/Style----------$40",
              "Men's Cut----------$20",
              "Child's Cut(8&Under)----------$15",
            ]}
          />
          <ServiceCard
            title="Styling"
            services={[
              "Thermal Iron--------$15",
              "Shampoo/Blowdry--------$30",
              "Updo--------$40",
              "Braid--------$5",
            ]}
          />
          <ServiceCard
            title="Nail Services"
            services={[
              "Manicure----------$69",
              "Pedicure----------$69",
              "Regular Foot Spa----------$50",
              "Deluxe Foot Spa----------$90",
              "Regular Hand Spa----------$50",
              "Deluxe Hand Spa----------$70",
              "Gel Polish----------$45",
              "Gel Polish Removal----------$35",
              "Nail Art----------$75",
            ]}
          />
        </div>
      </main>
    </div>
  );
}

export default Services;