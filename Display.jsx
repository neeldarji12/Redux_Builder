import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { delAction, setEditAction } from "./Action";
import { Pencil, Trash2, UserCircle } from "lucide-react";

const Display = () => {
    const { users } = useSelector((store) => store);
    const dispatch = useDispatch();

    return (
        <div className="bg-slate-50 pb-14">
            <div className="max-w-3xl mx-auto px-4">
                <div className="bg-white border border-slate-200 rounded-2xl divide-y">
                    {users.length === 0 && (
                        <p className="text-center text-slate-500 py-8 text-sm">
                            No users added yet
                        </p>
                    )}

                    {users.map((el, i) => (
                        <div
                            key={i}
                            className="flex items-center justify-between px-6 py-4"
                        >
                            <div className="flex items-center gap-3">
                                <UserCircle className=" text-slate-900" size={28} />
                                <div>
                                    <p className="font-medium text-slate-900 text-sm">
                                        {el.name}
                                    </p>
                                    <p className="text-slate-500 text-xs">
                                        {el.email}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => dispatch(setEditAction(i, el))}
                                    className="p-2 rounded-lg border border-slate-300 text-slate-600 hover:bg-sky-50"
                                >
                                    <Pencil size={14} />
                                </button>

                                <button
                                    onClick={() => dispatch(delAction(i))}
                                    className="p-2 rounded-lg border border-red-200 text-red-500 hover:bg-red-50"
                                >
                                    <Trash2 size={14} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Display;
