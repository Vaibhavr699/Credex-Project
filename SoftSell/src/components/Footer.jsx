const Footer = () => (
    <footer className="bg-[#0a2540] text-white py-8 font-outfit">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>&copy; {new Date().getFullYear()} <span className="font-semibold">SoftSell</span>. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#privacy" className="hover:underline">Privacy Policy</a>
          <a href="#terms" className="hover:underline">Terms of Service</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
  
  export default Footer;
  