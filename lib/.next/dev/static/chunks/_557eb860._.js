(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/firebase/client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/firebase/client.ts
__turbopack_context__.s([
    "app",
    ()=>app,
    "auth",
    ()=>auth,
    "db",
    ()=>db,
    "storage",
    ()=>storage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/app/dist/esm/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$storage$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/storage/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/storage/dist/index.esm.js [app-client] (ecmascript)");
;
;
;
;
const firebaseConfig = {
    apiKey: ("TURBOPACK compile-time value", "AIzaSyCY9bZvQpMQvz0WiyWKn1hENZ0woRsXpX8"),
    authDomain: ("TURBOPACK compile-time value", "shiftsitter-125b6.firebaseapp.com"),
    projectId: ("TURBOPACK compile-time value", "shiftsitter-125b6"),
    storageBucket: ("TURBOPACK compile-time value", "shiftsitter-125b6.firebasestorage.app"),
    messagingSenderId: ("TURBOPACK compile-time value", "976182973332"),
    appId: ("TURBOPACK compile-time value", "1:976182973332:web:e9cb91156dfeb49fa8f581")
};
const app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApps"])().length ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApp"])() : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initializeApp"])(firebaseConfig);
const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuth"])(app);
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFirestore"])(app);
const storage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStorage"])(app);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/families/onboarding/questions/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QuestionsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/firebase/client.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
/** ============================
 *  QUESTIONS (tus mismas)
 *  ============================ */ const QUESTIONS = [
    {
        id: "need_days",
        step: 1,
        title: "Let’s find out what you need",
        subtitle: "Which days do you typically need childcare?",
        type: "multi",
        required: true,
        options: [
            {
                value: "mon",
                label: "Mon",
                icon: "bi-calendar2"
            },
            {
                value: "tue",
                label: "Tue",
                icon: "bi-calendar2"
            },
            {
                value: "wed",
                label: "Wed",
                icon: "bi-calendar2"
            },
            {
                value: "thu",
                label: "Thu",
                icon: "bi-calendar2"
            },
            {
                value: "fri",
                label: "Fri",
                icon: "bi-calendar2"
            },
            {
                value: "sat",
                label: "Sat",
                icon: "bi-calendar2"
            },
            {
                value: "sun",
                label: "Sun",
                icon: "bi-calendar2"
            }
        ]
    },
    {
        id: "need_shifts",
        step: 1,
        title: "Which shift(s) do you need help with?",
        subtitle: "Select all that apply. This is a match core filter.",
        type: "multi",
        required: true,
        options: [
            {
                value: "early",
                label: "Early (4–8am)",
                icon: "bi-alarm"
            },
            {
                value: "day",
                label: "Day (8am–4pm)",
                icon: "bi-brightness-high"
            },
            {
                value: "evening",
                label: "Evening (4–10pm)",
                icon: "bi-sunset"
            },
            {
                value: "night",
                label: "Night (10pm–7am)",
                icon: "bi-moon-stars"
            }
        ]
    },
    {
        id: "need_duration",
        step: 2,
        title: "How many hours do you typically need on those days/blocks?",
        subtitle: "This influences reciprocity balance (not a hard filter).",
        type: "single",
        required: true,
        options: [
            {
                value: "1_4",
                label: "1–4 hours",
                icon: "bi-hourglass-split"
            },
            {
                value: "4_8",
                label: "4–8 hours",
                icon: "bi-hourglass"
            },
            {
                value: "8_12",
                label: "8–12 hours",
                icon: "bi-clock"
            },
            {
                value: "full_12",
                label: "Full shift (12 hours)",
                icon: "bi-clock-history"
            },
            {
                value: "12_plus",
                label: "More than 12 hours",
                icon: "bi-plus-circle"
            }
        ]
    },
    {
        id: "need_setting",
        step: 2,
        title: "Where do you prefer care to happen?",
        type: "single",
        required: true,
        options: [
            {
                value: "my_home",
                label: "My home",
                icon: "bi-house-heart"
            },
            {
                value: "their_home",
                label: "Their home",
                icon: "bi-house"
            },
            {
                value: "either",
                label: "Either is fine",
                icon: "bi-arrow-left-right"
            }
        ]
    },
    {
        id: "need_children_count",
        step: 3,
        title: "Your children",
        subtitle: "How many children need care?",
        type: "number",
        required: true,
        min: 1,
        max: 10
    },
    {
        id: "need_children_ages",
        step: 3,
        title: "Age of each child",
        subtitle: "Comma-separated is fine.",
        type: "text",
        required: true,
        placeholder: "e.g. 2, 4, 7"
    },
    {
        id: "need_special_considerations_yesno",
        step: 3,
        title: "Any special considerations or specific needs?",
        subtitle: "Allergies, sensory needs, medical notes, routines, etc.",
        type: "single",
        required: true,
        options: [
            {
                value: "no",
                label: "No",
                icon: "bi-x-circle"
            },
            {
                value: "yes",
                label: "Yes",
                icon: "bi-check2-circle"
            }
        ]
    },
    {
        id: "need_special_considerations_text",
        step: 3,
        title: "Please describe the considerations (short)",
        subtitle: "Only visible if you selected “Yes”.",
        type: "text",
        required: false,
        placeholder: "Optional details…"
    },
    {
        id: "home_smokefree",
        step: 4,
        title: "Safety & home environment",
        subtitle: "Is your home smoke-free?",
        type: "single",
        required: true,
        options: [
            {
                value: "yes",
                label: "Yes",
                icon: "bi-shield-check"
            },
            {
                value: "no",
                label: "No",
                icon: "bi-shield-x"
            }
        ]
    },
    {
        id: "require_smokefree",
        step: 4,
        title: "Do you require your match’s home to be smoke-free?",
        type: "single",
        required: true,
        options: [
            {
                value: "yes",
                label: "Yes",
                icon: "bi-check2-circle"
            },
            {
                value: "no",
                label: "No",
                icon: "bi-dash-circle"
            }
        ]
    },
    {
        id: "pets_in_home",
        step: 4,
        title: "Pets in your home?",
        type: "single",
        required: true,
        options: [
            {
                value: "none",
                label: "None",
                icon: "bi-ban"
            },
            {
                value: "small",
                label: "Small",
                icon: "bi-emoji-smile"
            },
            {
                value: "big",
                label: "Big",
                icon: "bi-emoji-sunglasses"
            },
            {
                value: "multiple",
                label: "Multiple",
                icon: "bi-stars"
            }
        ]
    },
    {
        id: "ok_with_pets",
        step: 4,
        title: "Are you okay with your children being around pets?",
        type: "single",
        required: true,
        options: [
            {
                value: "yes",
                label: "Yes",
                icon: "bi-check2-circle"
            },
            {
                value: "no",
                label: "No",
                icon: "bi-x-circle"
            }
        ]
    },
    {
        id: "home_zip",
        step: 5,
        title: "Transport & distance",
        subtitle: "Home ZIP code",
        type: "text",
        required: true,
        placeholder: "e.g. 21201"
    },
    {
        id: "work_zip",
        step: 5,
        title: "Work ZIP code",
        subtitle: "Used only to support handoff preferences.",
        type: "text",
        required: true,
        placeholder: "e.g. 21202"
    },
    {
        id: "handoff_location",
        step: 5,
        title: "Where should the handoff normally happen?",
        type: "single",
        required: true,
        options: [
            {
                value: "my_home",
                label: "My home",
                icon: "bi-house"
            },
            {
                value: "their_home",
                label: "Their home",
                icon: "bi-house-heart"
            },
            {
                value: "my_work",
                label: "My workplace",
                icon: "bi-building"
            },
            {
                value: "their_work",
                label: "Their workplace",
                icon: "bi-briefcase"
            },
            {
                value: "flexible",
                label: "Flexible",
                icon: "bi-arrow-repeat"
            }
        ]
    },
    {
        id: "max_travel",
        step: 5,
        title: "How far are you willing to travel for a match?",
        type: "single",
        required: true,
        options: [
            {
                value: "5",
                label: "5 minutes",
                icon: "bi-geo"
            },
            {
                value: "10",
                label: "10 minutes",
                icon: "bi-geo"
            },
            {
                value: "15",
                label: "15 minutes",
                icon: "bi-geo"
            },
            {
                value: "20",
                label: "20 minutes",
                icon: "bi-geo"
            },
            {
                value: "30",
                label: "30 minutes",
                icon: "bi-geo"
            },
            {
                value: "30_plus",
                label: "More than 30 minutes",
                icon: "bi-geo-alt"
            }
        ]
    },
    {
        id: "extras_need",
        step: 6,
        title: "Optional care extras",
        subtitle: "Not hard filters — they contribute to compatibility scoring.",
        type: "multi",
        required: false,
        options: [
            {
                value: "light_cleaning",
                label: "Light cleaning",
                icon: "bi-sparkles"
            },
            {
                value: "laundry",
                label: "Laundry",
                icon: "bi-basket"
            },
            {
                value: "meal_prep",
                label: "Meal prep",
                icon: "bi-egg-fried"
            },
            {
                value: "groceries",
                label: "Groceries / Errands",
                icon: "bi-cart"
            },
            {
                value: "transportation",
                label: "Transportation",
                icon: "bi-car-front"
            },
            {
                value: "pet_help",
                label: "Pet help",
                icon: "bi-heart"
            }
        ]
    },
    {
        id: "give_days",
        step: 7,
        title: "Now let’s find out what you can offer in return",
        subtitle: "Which days can you provide care?",
        type: "multi",
        required: true,
        options: [
            {
                value: "mon",
                label: "Mon",
                icon: "bi-calendar2"
            },
            {
                value: "tue",
                label: "Tue",
                icon: "bi-calendar2"
            },
            {
                value: "wed",
                label: "Wed",
                icon: "bi-calendar2"
            },
            {
                value: "thu",
                label: "Thu",
                icon: "bi-calendar2"
            },
            {
                value: "fri",
                label: "Fri",
                icon: "bi-calendar2"
            },
            {
                value: "sat",
                label: "Sat",
                icon: "bi-calendar2"
            },
            {
                value: "sun",
                label: "Sun",
                icon: "bi-calendar2"
            }
        ]
    },
    {
        id: "give_shifts",
        step: 7,
        title: "Which shift(s) can you cover?",
        type: "multi",
        required: true,
        options: [
            {
                value: "early",
                label: "Early (4–8am)",
                icon: "bi-alarm"
            },
            {
                value: "day",
                label: "Day (8am–4pm)",
                icon: "bi-brightness-high"
            },
            {
                value: "evening",
                label: "Evening (4–10pm)",
                icon: "bi-sunset"
            },
            {
                value: "night",
                label: "Night (10pm–7am)",
                icon: "bi-moon-stars"
            }
        ]
    },
    {
        id: "give_hours_month",
        step: 8,
        title: "How many hours can you realistically give per month?",
        subtitle: "This is a reciprocity balance dimension.",
        type: "single",
        required: true,
        options: [
            {
                value: "0_4",
                label: "0–4",
                icon: "bi-hourglass"
            },
            {
                value: "4_8",
                label: "4–8",
                icon: "bi-hourglass-split"
            },
            {
                value: "8_12",
                label: "8–12",
                icon: "bi-clock"
            },
            {
                value: "12_plus",
                label: "12+",
                icon: "bi-plus-circle"
            }
        ]
    },
    {
        id: "give_setting",
        step: 8,
        title: "Where are you comfortable providing care?",
        type: "single",
        required: true,
        options: [
            {
                value: "my_home",
                label: "My home",
                icon: "bi-house-heart"
            },
            {
                value: "their_home",
                label: "Their home",
                icon: "bi-house"
            },
            {
                value: "either",
                label: "Either",
                icon: "bi-arrow-left-right"
            }
        ]
    },
    {
        id: "give_total_children_capacity",
        step: 9,
        title: "Your capacity",
        subtitle: "How many total children (including yours) are you comfortable supervising?",
        type: "single",
        required: true,
        options: [
            {
                value: "1",
                label: "1",
                icon: "bi-1-circle"
            },
            {
                value: "2",
                label: "2",
                icon: "bi-2-circle"
            },
            {
                value: "3",
                label: "3",
                icon: "bi-3-circle"
            },
            {
                value: "4_plus",
                label: "4+",
                icon: "bi-plus-circle"
            }
        ]
    },
    {
        id: "give_age_ranges",
        step: 9,
        title: "What age ranges are you comfortable caring for?",
        type: "multi",
        required: true,
        options: [
            {
                value: "0_11m",
                label: "0–11 months",
                icon: "bi-heart"
            },
            {
                value: "1_3",
                label: "1–3 years",
                icon: "bi-emoji-smile"
            },
            {
                value: "4_5",
                label: "4–5 years",
                icon: "bi-balloon"
            },
            {
                value: "6_11",
                label: "6–11 years",
                icon: "bi-controller"
            },
            {
                value: "12_plus",
                label: "12+",
                icon: "bi-lightning"
            }
        ]
    },
    {
        id: "give_special_needs_ok",
        step: 10,
        title: "Special requirements",
        subtitle: "Are you comfortable caring for children with special needs?",
        type: "single",
        required: true,
        options: [
            {
                value: "yes",
                label: "Yes",
                icon: "bi-check2-circle"
            },
            {
                value: "no",
                label: "No",
                icon: "bi-x-circle"
            }
        ]
    },
    {
        id: "give_vehicle",
        step: 10,
        title: "Do you have your own vehicle for pickups/drop-offs?",
        type: "single",
        required: true,
        options: [
            {
                value: "yes",
                label: "Yes",
                icon: "bi-car-front"
            },
            {
                value: "no",
                label: "No",
                icon: "bi-ban"
            }
        ]
    },
    {
        id: "extras_offer",
        step: 11,
        title: "Optional extras you’re willing to offer",
        subtitle: "Not hard filters — they contribute to compatibility scoring.",
        type: "multi",
        required: false,
        options: [
            {
                value: "light_cleaning",
                label: "Light cleaning",
                icon: "bi-sparkles"
            },
            {
                value: "laundry",
                label: "Laundry",
                icon: "bi-basket"
            },
            {
                value: "meal_prep",
                label: "Meal prep",
                icon: "bi-egg-fried"
            },
            {
                value: "groceries",
                label: "Groceries / Errands",
                icon: "bi-cart"
            },
            {
                value: "transportation",
                label: "Transportation",
                icon: "bi-car-front"
            },
            {
                value: "pet_help",
                label: "Pet help",
                icon: "bi-heart"
            }
        ]
    }
];
function QuestionsPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [uid, setUid] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [answers, setAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [ready, setReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [saveError, setSaveError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const steps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "QuestionsPage.useMemo[steps]": ()=>{
            const uniq = Array.from(new Set(QUESTIONS.map({
                "QuestionsPage.useMemo[steps].uniq": (q)=>q.step
            }["QuestionsPage.useMemo[steps].uniq"]))).sort({
                "QuestionsPage.useMemo[steps].uniq": (a, b)=>a - b
            }["QuestionsPage.useMemo[steps].uniq"]);
            return uniq.length ? uniq : [
                1
            ];
        }
    }["QuestionsPage.useMemo[steps]"], []);
    const lastStep = steps[steps.length - 1];
    const stepQuestions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "QuestionsPage.useMemo[stepQuestions]": ()=>QUESTIONS.filter({
                "QuestionsPage.useMemo[stepQuestions]": (q)=>q.step === step
            }["QuestionsPage.useMemo[stepQuestions]"])
    }["QuestionsPage.useMemo[stepQuestions]"], [
        step
    ]);
    const shouldShowSpecialText = answers["need_special_considerations_yesno"] === "yes";
    // Auth boot
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuestionsPage.useEffect": ()=>{
            const unsub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onAuthStateChanged"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"], {
                "QuestionsPage.useEffect.unsub": async (user)=>{
                    setSaveError(null);
                    if (!user) {
                        setUid(null);
                        router.replace("/families");
                        return;
                    }
                    setUid(user.uid);
                    // Load onboarding from profiles/{uid}
                    try {
                        const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "profiles", user.uid);
                        const snap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])(ref);
                        if (snap.exists()) {
                            const data = snap.data();
                            const onboarding = data?.onboarding;
                            if (onboarding?.answers && typeof onboarding.answers === "object") {
                                setAnswers(onboarding.answers);
                            }
                            if (typeof onboarding?.step === "number" && onboarding.step >= steps[0] && onboarding.step <= lastStep) {
                                setStep(onboarding.step);
                            } else {
                                setStep(steps[0]);
                            }
                        } else {
                            // first time
                            setStep(steps[0]);
                        }
                        setReady(true);
                    } catch (e) {
                        setSaveError(e?.message ?? "Could not load your onboarding data.");
                        setReady(true);
                    }
                }
            }["QuestionsPage.useEffect.unsub"]);
            return ({
                "QuestionsPage.useEffect": ()=>unsub()
            })["QuestionsPage.useEffect"];
        }
    }["QuestionsPage.useEffect"], [
        router,
        steps,
        lastStep
    ]);
    const setValue = (id, value)=>{
        setAnswers((prev)=>({
                ...prev,
                [id]: value
            }));
    };
    const missingRequiredForStep = ()=>{
        const qs = stepQuestions.filter((q)=>{
            if (q.id === "need_special_considerations_text") return shouldShowSpecialText;
            return true;
        });
        const missing = [];
        for (const q of qs){
            if (!q.required) continue;
            const v = answers[q.id];
            if (q.type === "multi") {
                if (!Array.isArray(v) || v.length === 0) missing.push(q.id);
                continue;
            }
            if (q.type === "text") {
                if (typeof v !== "string" || v.trim().length === 0) missing.push(q.id);
                continue;
            }
            if (q.type === "number") {
                if (typeof v !== "number" || Number.isNaN(v)) missing.push(q.id);
                continue;
            }
            if (v === undefined || v === null || v === "") missing.push(q.id);
        }
        return missing;
    };
    const persist = async (nextStep, completed)=>{
        if (!uid) return false;
        setSaving(true);
        setSaveError(null);
        try {
            const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "profiles", uid);
            const payload = {
                onboarding: {
                    answers,
                    step: nextStep,
                    lastSavedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])()
                },
                updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])()
            };
            if (typeof completed === "boolean") {
                payload.onboardingCompleted = completed;
            }
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])(ref, payload, {
                merge: true
            });
            setSaving(false);
            return true;
        } catch (e) {
            setSaving(false);
            setSaveError(e?.message ?? "Could not save. Please try again.");
            return false;
        }
    };
    const nextOrFinish = async ()=>{
        const missing = missingRequiredForStep();
        if (missing.length) {
            setSaveError("Please complete the required fields before continuing.");
            return;
        }
        // middle steps: save + advance
        if (step < lastStep) {
            const nextStep = Math.min(step + 1, lastStep);
            const ok = await persist(nextStep);
            if (!ok) return;
            setStep(nextStep);
            return;
        }
        // last step: final save + completed
        const ok = await persist(lastStep, true);
        if (ok) router.push("/families/match");
    };
    const prev = async ()=>{
        setSaveError(null);
        const prevStep = Math.max(step - 1, steps[0]);
        // Save step position (no need to block if it fails, but better to try)
        await persist(prevStep);
        setStep(prevStep);
    };
    if (!ready) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "auth-shell",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "onb-card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "match-title",
                        children: "Loading…"
                    }, void 0, false, {
                        fileName: "[project]/app/families/onboarding/questions/page.tsx",
                        lineNumber: 570,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "muted",
                        children: "Preparing onboarding."
                    }, void 0, false, {
                        fileName: "[project]/app/families/onboarding/questions/page.tsx",
                        lineNumber: 571,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "auth-loader"
                    }, void 0, false, {
                        fileName: "[project]/app/families/onboarding/questions/page.tsx",
                        lineNumber: 572,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/families/onboarding/questions/page.tsx",
                lineNumber: 569,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/families/onboarding/questions/page.tsx",
            lineNumber: 568,
            columnNumber: 7
        }, this);
    }
    const stepIndex = steps.indexOf(step);
    const progressPct = Math.round((stepIndex + 1) / steps.length * 100);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "onb-shell",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "onb-card",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "q-head",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "q-head-top",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "onb-badge",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "bi bi-stars"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/families/onboarding/questions/page.tsx",
                                                    lineNumber: 588,
                                                    columnNumber: 17
                                                }, this),
                                                "Needs + Values onboarding"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/families/onboarding/questions/page.tsx",
                                            lineNumber: 587,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            style: {
                                                marginTop: ".9rem"
                                            },
                                            children: "Tell us what “covered” looks like for your family."
                                        }, void 0, false, {
                                            fileName: "[project]/app/families/onboarding/questions/page.tsx",
                                            lineNumber: 591,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "muted",
                                            style: {
                                                marginTop: ".35rem"
                                            },
                                            children: [
                                                "Step ",
                                                stepIndex + 1,
                                                " of ",
                                                steps.length
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/families/onboarding/questions/page.tsx",
                                            lineNumber: 594,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/families/onboarding/questions/page.tsx",
                                    lineNumber: 586,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "q-ghost",
                                    onClick: ()=>router.push("/logout"),
                                    disabled: saving,
                                    title: "Log out",
                                    children: "Log out"
                                }, void 0, false, {
                                    fileName: "[project]/app/families/onboarding/questions/page.tsx",
                                    lineNumber: 599,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/families/onboarding/questions/page.tsx",
                            lineNumber: 585,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "q-progress",
                            "aria-label": "Progress",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "q-progress-bar",
                                style: {
                                    width: `${progressPct}%`
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/families/onboarding/questions/page.tsx",
                                lineNumber: 611,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/families/onboarding/questions/page.tsx",
                            lineNumber: 610,
                            columnNumber: 11
                        }, this),
                        saveError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "q-error",
                            children: saveError
                        }, void 0, false, {
                            fileName: "[project]/app/families/onboarding/questions/page.tsx",
                            lineNumber: 614,
                            columnNumber: 24
                        }, this) : null
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/families/onboarding/questions/page.tsx",
                    lineNumber: 584,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "q-stack",
                    children: stepQuestions.filter((q)=>{
                        if (q.id === "need_special_considerations_text") return shouldShowSpecialText;
                        return true;
                    }).map((q)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "q-card",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "q-card-title",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "q-title",
                                                children: [
                                                    q.title,
                                                    " ",
                                                    q.required ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: "#991b1b"
                                                        },
                                                        children: "*"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/families/onboarding/questions/page.tsx",
                                                        lineNumber: 629,
                                                        columnNumber: 37
                                                    }, this) : null
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/families/onboarding/questions/page.tsx",
                                                lineNumber: 627,
                                                columnNumber: 21
                                            }, this),
                                            q.subtitle ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "q-sub muted",
                                                children: q.subtitle
                                            }, void 0, false, {
                                                fileName: "[project]/app/families/onboarding/questions/page.tsx",
                                                lineNumber: 631,
                                                columnNumber: 35
                                            }, this) : null
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/families/onboarding/questions/page.tsx",
                                        lineNumber: 626,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/families/onboarding/questions/page.tsx",
                                    lineNumber: 625,
                                    columnNumber: 17
                                }, this),
                                q.type === "single" && q.options?.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "q-options",
                                    children: q.options.map((opt)=>{
                                        const active = answers[q.id] === opt.value;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: `q-opt ${active ? "is-active" : ""}`,
                                            onClick: ()=>setValue(q.id, opt.value),
                                            disabled: saving,
                                            children: [
                                                opt.icon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: `bi ${opt.icon}`
                                                }, void 0, false, {
                                                    fileName: "[project]/app/families/onboarding/questions/page.tsx",
                                                    lineNumber: 648,
                                                    columnNumber: 39
                                                }, this) : null,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: opt.label
                                                }, void 0, false, {
                                                    fileName: "[project]/app/families/onboarding/questions/page.tsx",
                                                    lineNumber: 649,
                                                    columnNumber: 27
                                                }, this),
                                                active ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "bi bi-check2-circle q-check"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/families/onboarding/questions/page.tsx",
                                                    lineNumber: 650,
                                                    columnNumber: 37
                                                }, this) : null
                                            ]
                                        }, opt.value, true, {
                                            fileName: "[project]/app/families/onboarding/questions/page.tsx",
                                            lineNumber: 641,
                                            columnNumber: 25
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/app/families/onboarding/questions/page.tsx",
                                    lineNumber: 637,
                                    columnNumber: 19
                                }, this) : null,
                                q.type === "multi" && q.options?.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "q-options",
                                    children: q.options.map((opt)=>{
                                        const current = Array.isArray(answers[q.id]) ? answers[q.id] : [];
                                        const active = current.includes(opt.value);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: `q-opt ${active ? "is-active" : ""}`,
                                            onClick: ()=>{
                                                const nextArr = active ? current.filter((v)=>v !== opt.value) : [
                                                    ...current,
                                                    opt.value
                                                ];
                                                setValue(q.id, nextArr);
                                            },
                                            disabled: saving,
                                            children: [
                                                opt.icon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: `bi ${opt.icon}`
                                                }, void 0, false, {
                                                    fileName: "[project]/app/families/onboarding/questions/page.tsx",
                                                    lineNumber: 677,
                                                    columnNumber: 39
                                                }, this) : null,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: opt.label
                                                }, void 0, false, {
                                                    fileName: "[project]/app/families/onboarding/questions/page.tsx",
                                                    lineNumber: 678,
                                                    columnNumber: 27
                                                }, this),
                                                active ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "bi bi-check2-circle q-check"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/families/onboarding/questions/page.tsx",
                                                    lineNumber: 679,
                                                    columnNumber: 37
                                                }, this) : null
                                            ]
                                        }, opt.value, true, {
                                            fileName: "[project]/app/families/onboarding/questions/page.tsx",
                                            lineNumber: 665,
                                            columnNumber: 25
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/app/families/onboarding/questions/page.tsx",
                                    lineNumber: 659,
                                    columnNumber: 19
                                }, this) : null,
                                q.type === "text" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    className: "ss-input",
                                    value: answers[q.id] ?? "",
                                    onChange: (e)=>setValue(q.id, e.target.value),
                                    placeholder: q.placeholder ?? "",
                                    disabled: saving
                                }, void 0, false, {
                                    fileName: "[project]/app/families/onboarding/questions/page.tsx",
                                    lineNumber: 688,
                                    columnNumber: 19
                                }, this) : null,
                                q.type === "number" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    className: "ss-input",
                                    style: {
                                        maxWidth: 220
                                    },
                                    type: "number",
                                    value: answers[q.id] ?? "",
                                    min: q.min,
                                    max: q.max,
                                    onChange: (e)=>setValue(q.id, e.target.value === "" ? "" : Number(e.target.value)),
                                    disabled: saving
                                }, void 0, false, {
                                    fileName: "[project]/app/families/onboarding/questions/page.tsx",
                                    lineNumber: 699,
                                    columnNumber: 19
                                }, this) : null
                            ]
                        }, q.id, true, {
                            fileName: "[project]/app/families/onboarding/questions/page.tsx",
                            lineNumber: 624,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/families/onboarding/questions/page.tsx",
                    lineNumber: 617,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "q-actions",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "match-btn ghost",
                            onClick: prev,
                            disabled: step === steps[0] || saving,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "bi bi-arrow-left"
                                }, void 0, false, {
                                    fileName: "[project]/app/families/onboarding/questions/page.tsx",
                                    lineNumber: 721,
                                    columnNumber: 13
                                }, this),
                                "Back"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/families/onboarding/questions/page.tsx",
                            lineNumber: 715,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "match-btn primary",
                            onClick: nextOrFinish,
                            disabled: saving,
                            children: saving ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "bi bi-cloud-arrow-up"
                                    }, void 0, false, {
                                        fileName: "[project]/app/families/onboarding/questions/page.tsx",
                                        lineNumber: 733,
                                        columnNumber: 17
                                    }, this),
                                    "Saving…"
                                ]
                            }, void 0, true) : step === lastStep ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Continue to matching ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "bi bi-arrow-right"
                                    }, void 0, false, {
                                        fileName: "[project]/app/families/onboarding/questions/page.tsx",
                                        lineNumber: 738,
                                        columnNumber: 38
                                    }, this)
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Continue ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "bi bi-arrow-right"
                                    }, void 0, false, {
                                        fileName: "[project]/app/families/onboarding/questions/page.tsx",
                                        lineNumber: 742,
                                        columnNumber: 26
                                    }, this)
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/app/families/onboarding/questions/page.tsx",
                            lineNumber: 725,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/families/onboarding/questions/page.tsx",
                    lineNumber: 714,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/families/onboarding/questions/page.tsx",
            lineNumber: 583,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/families/onboarding/questions/page.tsx",
        lineNumber: 582,
        columnNumber: 5
    }, this);
}
_s(QuestionsPage, "+m2u6AccCR0r2QlDMpIeDUfD20o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = QuestionsPage;
var _c;
__turbopack_context__.k.register(_c, "QuestionsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_557eb860._.js.map