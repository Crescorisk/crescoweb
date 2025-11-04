import { Phone, Mail } from "lucide-react";

const TopBar = () => (
  <div className="bg-[#1e2124] text-white py-2 px-4 flex flex-col gap-2 text-sm md:flex-row md:items-center md:gap-8 md:justify-start lg:flex-row lg:gap-8 lg:justify-start">
    <div className="flex items-center gap-2">
      <Phone className="h-4 w-4 text-[#084CA1]" />
      <span>+39 340 4931607</span>
    </div>
    <div className="flex items-center gap-2">
      <Phone className="h-4 w-4 text-[#084CA1]" />
      <span>+39 328 7833398</span>
    </div>
    <div className="flex items-center gap-2">
      <Mail className="h-4 w-4 text-[#084CA1]" />
      <span>crescosrls@gmail.com</span>
    </div>
  </div>
);

export default TopBar;
