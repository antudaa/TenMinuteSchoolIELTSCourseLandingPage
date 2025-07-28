'use client';

import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="container max-w-7xl mx-auto px-4  mb-24 md:mb-0">
            <div className="flex flex-col pt-12 md:flex-row md:border-[#E4E4E4]">
                {/* Logo + App Download */}
                <div className="flex w-full flex-col items-center md:items-start md:mb-0 mb-7">
                    <Link href="/" className="mb-4">
                        <Image
                            src="https://10minuteschool.com/images/logo.svg"
                            alt="Instructor"
                            width={116}
                            height={32}
                            priority
                        />
                    </Link>
                    <h3 className="mb-[14px] text-base font-semibold md:font-medium">Download Our Mobile App</h3>
                    <div className="flex">
                        <Link href="https://play.google.com/store/apps/details?id=com.a10minuteschool.tenminuteschool" className="mr-4">
                            <Image
                                src="https://cdn.10minuteschool.com/images/google-play-icon_1695731678094.png"
                                alt="Google Play"
                                width={156}
                                height={49}
                            />
                        </Link>
                        <Link href="https://apps.apple.com/us/app/10-minute-school/id1577061772">
                            <Image
                                src="https://cdn.10minuteschool.com/images/ios-store-icon_1695731704002.png"
                                alt="iOS Store"
                                width={156}
                                height={49}
                            />
                        </Link>
                    </div>
                </div>

                {/* Company & Other Links */}
                <div className="mx-0 flex w-full justify-center border-b border-[#E4E4E4] pb-8 md:mx-14 md:border-none">
                    <div className="flex w-full max-w-sm justify-center">
                        {/* Company Links */}
                        <div className="w-1/2 mr-4">
                            <h3 className="mb-3 text-base font-semibold md:text-xl md:font-bold">Company</h3>
                            <ul className="flex flex-col gap-2 text-gray-600">
                                <li><Link href="https://app.10minuteschool.com/careers" className="hover:text-green">Career / Recruitment</Link></li>
                                <li><Link href="https://docs.google.com/forms/d/e/1FAIpQLScWh9jjyWnUKdDKET1-LHvdTxuU6-ssd0GLTI-0JlQ2MH6RzA/viewform" className="hover:text-green">Join as a Teacher</Link></li>
                                <li><Link href="https://affiliation.10minuteschool.com/" className="hover:text-green">Join as a Affiliate</Link></li>
                                <li><Link href="https://app.10minuteschool.com/privacy-policy" className="hover:text-green">Privacy policy</Link></li>
                                <li><Link href="https://app.10minuteschool.com/refund-policy" className="hover:text-green">Refund policy</Link></li>
                                <li><Link href="https://app.10minuteschool.com/terms-and-conditions" className="hover:text-green">Terms & Conditions</Link></li>
                            </ul>
                        </div>

                        {/* Other Links */}
                        <div className="w-1/2">
                            <h3 className="mb-3 text-base font-semibold md:text-xl md:font-bold">Others</h3>
                            <ul className="flex flex-col gap-2 text-gray-600">
                                <li><Link href="https://blog.10minuteschool.com/" className="hover:text-green">Blog</Link></li>
                                <li><Link href="/store/all" className="hover:text-green">Book Store</Link></li>
                                <li><Link href="https://10minuteschool.com/content" className="hover:text-green">Free Notes & Guides</Link></li>
                                <li><Link href="/jobs-prep" className="hover:text-green">Job Preparation Courses</Link></li>
                                <li><Link href="/certificate" className="hover:text-green">Veriry Certificate</Link></li>
                                <li><Link href="/resource" className="hover:text-green">Free Download</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Contact Info + Socials */}
                <div className="ml-0 flex w-full flex-col md:ml-4">
                    <div className="hidden md:block">
                        <h3 className="mb-3 text-base font-semibold md:text-xl md:font-bold">Keep up with us at</h3>
                        <p className="mb-4 text-base">Call Us: <a className="text-[#1CAB55]" href="tel:16910">16910</a> (24x7)</p>
                        <p className="mb-4 text-base">Whatsapp: <a className="text-[#1CAB55]" href="https://api.whatsapp.com/send?phone=+8801896016252&amp;text=I need your assistance">+8801896016252</a> (24x7)</p>
                        <p className="mb-4 text-base">Outside Bangladesh: <a className="text-[#1CAB55]" href="tel:+8809610916910">+880 9610916910</a></p>
                        <p className="mb-2 text-base">Email: <span className="text-[#1CAB55]">support@10minuteschool.com</span></p>
                    </div>

                    {/* Social Links */}
                    <div className="mx-auto mt-5 mb-3 flex w-full max-w-[256px] gap-6 md:mx-0">
                        {[
                            {
                                name: 'facebook',
                                href: 'https://www.facebook.com/10minuteschool/', src: 'https://cdn.10minuteschool.com/images/facebook_1695730910971.png'
                            },
                            {
                                name: 'instagram',
                                href: 'https://www.instagram.com/10ms_insta/',
                                src: 'https://cdn.10minuteschool.com/images/instagram_1695731442397.png'
                            },
                            {
                                name: 'linkedin',
                                href: 'https://www.linkedin.com/company/10ms/',
                                src: 'https://cdn.10minuteschool.com/images/linkedin_1695731507042.png'
                            },
                            {
                                name: 'youtube',
                                href: 'https://www.youtube.com/channel/UCL89KKkLs0tZKld-iIS3NGw',
                                src: 'https://cdn.10minuteschool.com/images/youtube_1695731538726.png'
                            },
                            {
                                name: 'tiktok',
                                href: 'https://www.tiktok.com/@10minuteschool?lang=en',
                                src: 'https://cdn.10minuteschool.com/images/Tiktok_1695731564895.png'
                            },
                        ].map((icon) => (
                            <Link key={icon.name} href={icon.href} target="_blank">
                                <Image src={icon.src} alt={icon.name} width={32} height={32} />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="pb-5 text-center">
                <p className="text-xs text-gray-600 md:text-sm">
                    2015 - 2025 Copyright © 10 Minute School. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
