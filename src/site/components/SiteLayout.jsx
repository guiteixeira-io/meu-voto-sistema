import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

const SiteLayout = ({ children }) => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 w-full">{children}</main>
      <SiteFooter />
    </div>
  );
};

export default SiteLayout;
