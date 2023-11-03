import profile from "../../assets/images/profile.png";

const Header = () => {
    return (
        <header className="flex justify-between items-center py-4 mb-3 border-b-2">
            <h1 className="text-2xl font-bold">Knowledge Cafe</h1>
            <img src={profile} className="w-9" alt="" />
        </header>
    );
};

export default Header;