import { useEffect, useState } from "react";

export default function PricingSection() {
const [plans, setPlans] = useState([]);

useEffect(() => {
fetch("/pricing.json")
.then((res) => res.json())
.then((data) => setPlans(data));
}, []);

return (
<section className="px-4 py-20">
<div className="mx-auto max-w-6xl">
<div className="text-center">
<h2 className="text-[48px] font-extrabold text-[#101727] md:text-5xl">
Simple, Transparent Pricing
</h2>
<p className="mt-3 text-sm text-gray-400">
Choose the plan that fits your needs. Upgrade or downgrade anytime.
</p>
</div>

<div className="mt-14 grid gap-6 md:grid-cols-3">
{plans.map((plan) => (
<div
key={plan.id}
className={`relative rounded-2xl border p-6 shadow-sm transition ${
plan.active
? "border-purple-500 bg-gradient-to-b from-[#6d28ff] to-[#b21fff] text-white"
: "border-gray-200 bg-white text-[#111827]"
}`}
>
{/* Badge */}
{plan.badge && (
<span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f6c65b] px-3 py-1 text-xs font-medium text-[#6b4b00]">
{plan.badge}
</span>
)}

<h3 className="text-2xl font-semibold">{plan.name}</h3>

<p
className={`mt-1 text-sm ${
plan.active ? "text-purple-100" : "text-gray-400"
}`}
>
{plan.subtitle}
</p>

<div className="mt-6 flex items-end gap-1">
<span className="text-5xl font-bold">${plan.price}</span>
<span
className={`mb-1 text-base ${
plan.active ? "text-purple-100" : "text-gray-400"
}`}
>
/Month
</span>
</div>

<ul className="mt-8 space-y-3">
{plan.features.map((feature, i) => (
<li
key={i}
className={`flex items-center gap-3 text-sm ${
plan.active ? "text-white" : "text-gray-500"
}`}
>
<span
className={`font-bold ${
plan.active ? "text-white" : "text-green-500"
}`}
>
✓
</span>
{feature}
</li>
))}
</ul>

<button
className={`mt-10 w-full rounded-full py-3 text-sm font-semibold ${
plan.active
? "bg-white text-purple-700"
: "bg-gradient-to-r from-[#6d28ff] to-[#a21caf] text-white"
}`}
>
{plan.buttonText}
</button>
</div>
))}
</div>
</div>
</section>
);
};