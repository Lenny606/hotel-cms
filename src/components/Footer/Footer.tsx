import Link from "next/link";
import {BsFillSendFill, BsTelephoneOutbound} from "react-icons/bs";
import {BiMessageDetail} from "react-icons/bi";

const Footer = () => {
    return (
        <footer className={'mt-16'}>
            <div className="container mx-auto px-4">
                <Link href={"/"} className={'font-black text-tertiary-dark'}>
                    Hotels
                </Link>
                <h4 className={'font-semibold text-[40px] py-6'}>Contact</h4>

                <div className={'flex flex-wrap gap-16 items-center justify-between'}>
                    <div className={'flex-1'}>
                        <p>Adress
                        </p>
                        <div className={'flex items-center py-4'}>
                            <BsFillSendFill />
                            <p className={'ml-2'}>copyright</p>
                        </div>
                        <div className={'flex items-center py-4'}>
                            <BsTelephoneOutbound />
                            <p className={'ml-2'}>12345</p>
                        </div>
                        <div className={'flex items-center py-4'}>
                            <BiMessageDetail />
                            <p className={'ml-2'}>copyright</p>
                        </div>
                    </div>
                    <div className="flex-1 md:text-right">
                        <p className="pb-4">About us</p>
                        <p className="pb-4">Message</p>
                        <p className="pb-4">Privacy</p>
                        <p className="pb-4">Terms</p>
                        <p className="pb-4">Assistance</p>
                    </div>

                    <div className="flex-1 md:text-right">
                        <p className="pb-4">Dinnig</p>
                        <p className="pb-4">Welness</p>
                        <p className="pb-4">Fitness</p>
                        <p className="pb-4">Sports</p>
                        <p className="pb-4">Events</p>
                    </div>

                </div>
            </div>
            <div className={'bg-tertiary-light h-10 md:h-[70px] mt-16 w-full bottom-0 left-0'}></div>
        </footer>
    )
}

export default Footer;