import React from "react";
import Spinner from "../Components/Spinner";

import { useSelector } from "react-redux";
const LeaderboardPage = () => {
    const { loading, leaderboard } = useSelector((state) => state.user);
    return (
        <>
            <section className="w-full  h-fit px-5 mt-40  flex flex-col">
                {loading ? (
                    <Spinner />
                ) : (
                    <>
                        <div className="flex flex-col min-[340px]:flex-row min-[340px]:gap-2 mt-5">
                            <h1
                                className={`text-[#D6482B] text-2xl font-bold mb-2 min-[480px]:text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl`}
                            >
                                Bidders Leaderboard
                            </h1>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white border my-5 border-gray-300">
                                <thead>
                                    <tr>
                                        <th className="py-2 px-4 text-left">Profile Pic</th>
                                        <th className="py-2 px-4 text-left">Username</th>
                                        <th className="py-2 px-4 text-left">Bid Expenditure</th>
                                        <th className="py-2 px-4 text-left">Auctions Won</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-700">
                                    {leaderboard.slice(0, 100).map((element, index) => {
                                        return (
                                            <tr
                                                key={element._id}
                                                className="border-b border-gray-300"
                                            >
                                                <td className="flex gap-2 items-center py-2 px-4">
                                                    <span className="text-stone-400 font-semibold text-xl w-7 hidden sm:block">
                                                        {index + 1}
                                                    </span>
                                                    <span>
                                                        <img
                                                            src={element.profileImage?.url}
                                                            alt={element.username}
                                                            className="h-12 w-12 object-cover rounded-full"
                                                        />
                                                    </span>
                                                </td>
                                                <td className="py-2 px-4">{element.userName}</td>
                                                <td className="py-2 px-4">{element.moneySpent}</td>
                                                <td className="py-2 px-4">{element.auctionsWOn}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </>
                )}
            </section>
        </>
    );
}
export default LeaderboardPage