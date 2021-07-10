import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";

function Header() {
    return (
        <header className="sticky top-0 flex items-center px-2 py-1 shadow-md bg-white">
            <Button
                color="gray"
                buttonType="outline"
                rounded={true}
                iconOnly={true}
                ripple="dark"
                className="h-10 w-10 border-0"
            >
                <Icon name="menu" size="2xl" />
            </Button>

            <Icon name="description" size="3xl" color="blue" />
            <h1 className=" md:inline-flex ml-1 text-gray-700 text-2xl">
                Docs
            </h1>


            <div className="mx-5 md:mx-20 flex flex-grow items-center px-5 py-1 bg-gray-100 text-gray-600 rounded-lg focus-within:text-gray-600 focus-within:shadow-md">
                <Icon name="search" size="2xl" color="gray" />
                <input type="text" placeholder="chercher" className="flex-grow px-5 text-base bg-transparent outline-none" />
            </div>

            <Button
                color="gray"
                buttonType="outline"
                rounded={true}
                iconOnly={true}
                ripple="dark"
                className="ml-5 md:ml-20 h-10 w-10 border-0"
            >
                <Icon name="apps" size="3xl" color="gray" />
            </Button>

            <img 
                loading="lazy"
                className=" cursor-pointer h-12 w-12 rounded-full ml-2"
                src="https://africanexperts.neocities.org/assets/img/dummies/team1.jpg"
                alt=""
            />


        </header>
    )
}

export default Header
