import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { myAction, editAction } from "./Action";
import { User, Mail, Plus, Save } from "lucide-react";

const Input = () => {
    const dispatch = useDispatch();
    const { editIndex, editData } = useSelector((store) => store);

    const [state, setState] = useState({
        name: "",
        email: ""
    });

    useEffect(() => {
        if (editIndex !== null) {
            setState(editData);
        }
    }, [editIndex, editData]);

    function handleChange(e) {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    }

    function handleSubmit() {
        if (!state.name || !state.email) return;

        if (editIndex !== null) {
            dispatch(editAction(state));
        } else {
            dispatch(myAction(state));
        }

        setState({ name: "", email: "" });
    }

    return (
        <div className="bg-slate-50 py-10">
            <div className="max-w-3xl mx-auto px-4">
                <div className="bg-white border border-slate-200 rounded-2xl p-6">
                    <h2 className="text-lg font-semibold text-slate-900 mb-5 flex items-center gap-2">
                        {editIndex !== null ? <Save size={18} /> : <Plus size={18} />}
                        {editIndex !== null ? "Edit User" : "Add User"}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="relative">
                            <User
                                size={16}
                                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                            />
                            <input
                                type="text"
                                name="name"
                                value={state.name}
                                onChange={handleChange}
                                placeholder="Full name"
                                className="w-full pl-9 pr-3 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-sky-200"
                            />
                        </div>

                        <div className="relative">
                            <Mail
                                size={16}
                                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                            />
                            <input
                                type="email"
                                name="email"
                                value={state.email}
                                onChange={handleChange}
                                placeholder="Email address"
                                className="w-full pl-9 pr-3 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-sky-200"
                            />
                        </div>
                    </div>

                    <button
                        onClick={handleSubmit}
                        className="mt-5 w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#0b1c2d] text-white text-sm font-medium hover:bg-[#0e2a44]"
                    >
                        {editIndex !== null ? <Save size={16} /> : <Plus size={16} />}
                        {editIndex !== null ? "Update User" : "Add User"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Input;
