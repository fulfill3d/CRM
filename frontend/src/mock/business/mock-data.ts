import {ServiceCategoriesProps} from "@/components/business/store/service/service-categories-dropdown";
import {Appointment, AppointmentService} from "@/models/business/models";

export const mockStores = [
        {
            "id": 1,
            "name": "Golden Gate Spa",
            "description": "A relaxing spa experience near the iconic Golden Gate Bridge.",
            "created_at": "2024-08-17T14:30:00.000",
            "updated_at": "2024-08-17T14:30:00.000",
            "address": {
                id: 1,
                location_name: "Golden Gate Spa",
                first_name: "Alice",
                last_name: "Smith",
                street1: "2500 Lombard St",
                street2: "",
                city: "San Francisco",
                state: "CA",
                country: "US",
                zip_code: "94123"
            },
            "location": {
                "location_id": 1,
                "address_id": 1,
                "created_at": "2024-08-17T14:30:00.000",
                "updated_at": "2024-08-17T14:30:00.000",
                "location_name": "Golden Gate Spa",
                "latitude": 37.8024,
                "longitude": -122.4058,
                "address_first_name": "Alice",
                "address_last_name": "Smith",
                "street1": "2500 Lombard St",
                "street2": "",
                "city": "San Francisco",
                "state": "CA",
                "country": "US",
                "zip_code": "94123"
            },
            "employees": [
                {
                    "id": 1,
                    "nick_name": "Ali",
                    "first_name": "Alice",
                    "last_name": "Smith",
                    "e_mail": "alice.smith@example.com",
                    "phone": "+14155551234",
                    "created_at": "2024-08-17T14:35:00.000",
                    "updated_at": "2024-08-17T14:35:00.000"
                },
                {
                    "id": 2,
                    "nick_name": "Mike",
                    "first_name": "Michael",
                    "last_name": "Johnson",
                    "e_mail": "michael.johnson@example.com",
                    "phone": "+14155556789",
                    "created_at": "2024-08-17T14:36:00.000",
                    "updated_at": "2024-08-17T14:36:00.000"
                },
                {
                    "id": 3,
                    "nick_name": "Jen",
                    "first_name": "Jennifer",
                    "last_name": "Davis",
                    "e_mail": "jennifer.davis@example.com",
                    "phone": "+14155553456",
                    "created_at": "2024-08-17T14:37:00.000",
                    "updated_at": "2024-08-17T14:37:00.000"
                },
                {
                    "id": 4,
                    "nick_name": "Rob",
                    "first_name": "Robert",
                    "last_name": "Garcia",
                    "e_mail": "robert.garcia@example.com",
                    "phone": "+14155552345",
                    "created_at": "2024-08-17T14:38:00.000",
                    "updated_at": "2024-08-17T14:38:00.000"
                },
                {
                    "id": 5,
                    "nick_name": "Em",
                    "first_name": "Emily",
                    "last_name": "Martinez",
                    "e_mail": "emily.martinez@example.com",
                    "phone": "+14155558901",
                    "created_at": "2024-08-17T14:39:00.000",
                    "updated_at": "2024-08-17T14:39:00.000"
                }
            ]
        },
        {
            "id": 2,
            "name": "Downtown Relaxation Spa",
            "description": "A downtown retreat for relaxation and rejuvenation.",
            "created_at": "2024-08-17T14:40:00.000",
            "updated_at": "2024-08-17T14:40:00.000",
            "address": {
                id: 2,
                location_name: "Downtown Relaxation Spa",
                first_name: "Bob",
                last_name: "Johnson",
                street1: "789 Market St",
                street2: "Suite 200",
                city: "San Francisco",
                state: "CA",
                country: "US",
                zip_code: "94103"
            },
            "location": {
                "location_id": 2,
                "address_id": 2,
                "created_at": "2024-08-17T14:40:00.000",
                "updated_at": "2024-08-17T14:40:00.000",
                "location_name": "Downtown Relaxation Spa",
                "latitude": 37.7749,
                "longitude": -122.4194,
                "address_first_name": "Bob",
                "address_last_name": "Johnson",
                "street1": "789 Market St",
                "street2": "Suite 200",
                "city": "San Francisco",
                "state": "CA",
                "country": "US",
                "zip_code": "94103"
            },
            "employees": [
                {
                    "id": 6,
                    "nick_name": "Bobby",
                    "first_name": "Bob",
                    "last_name": "Johnson",
                    "e_mail": "bob.johnson@example.com",
                    "phone": "+14155556789",
                    "created_at": "2024-08-17T14:45:00.000",
                    "updated_at": "2024-08-17T14:45:00.000"
                },
                {
                    "id": 7,
                    "nick_name": "Lisa",
                    "first_name": "Lisa",
                    "last_name": "Miller",
                    "e_mail": "lisa.miller@example.com",
                    "phone": "+14155557654",
                    "created_at": "2024-08-17T14:46:00.000",
                    "updated_at": "2024-08-17T14:46:00.000"
                },
                {
                    "id": 8,
                    "nick_name": "Tom",
                    "first_name": "Thomas",
                    "last_name": "Wilson",
                    "e_mail": "thomas.wilson@example.com",
                    "phone": "+14155558923",
                    "created_at": "2024-08-17T14:47:00.000",
                    "updated_at": "2024-08-17T14:47:00.000"
                },
                {
                    "id": 9,
                    "nick_name": "Sara",
                    "first_name": "Sarah",
                    "last_name": "Moore",
                    "e_mail": "sarah.moore@example.com",
                    "phone": "+14155551234",
                    "created_at": "2024-08-17T14:48:00.000",
                    "updated_at": "2024-08-17T14:48:00.000"
                },
                {
                    "id": 10,
                    "nick_name": "Greg",
                    "first_name": "Gregory",
                    "last_name": "Taylor",
                    "e_mail": "gregory.taylor@example.com",
                    "phone": "+14155557890",
                    "created_at": "2024-08-17T14:49:00.000",
                    "updated_at": "2024-08-17T14:49:00.000"
                }
            ]
        },
        {
            "id": 3,
            "name": "Silicon Valley Wellness Center",
            "description": "A premier wellness center in the heart of Silicon Valley.",
            "created_at": "2024-08-17T14:50:00.000",
            "updated_at": "2024-08-17T14:50:00.000",
            "address": {
                id: 3,
                location_name: "Silicon Valley Wellness Center",
                first_name: "Charlie",
                last_name: "Brown",
                street1: "456 W El Camino Real",
                street2: "",
                city: "Mountain View",
                state: "CA",
                country: "US",
                zip_code: "94040"
            },
            "location": {
                "location_id": 3,
                "address_id": 3,
                "created_at": "2024-08-17T14:50:00.000",
                "updated_at": "2024-08-17T14:50:00.000",
                "location_name": "Silicon Valley Wellness Center",
                "latitude": 37.7749,
                "longitude": -122.4194,
                "address_first_name": "Charlie",
                "address_last_name": "Brown",
                "street1": "456 W El Camino Real",
                "street2": "",
                "city": "Mountain View",
                "state": "CA",
                "country": "US",
                "zip_code": "94040"
            },
            "employees": [
                {
                    "id": 11,
                    "nick_name": "Chuck",
                    "first_name": "Charlie",
                    "last_name": "Brown",
                    "e_mail": "charlie.brown@example.com",
                    "phone": "+16505551234",
                    "created_at": "2024-08-17T14:55:00.000",
                    "updated_at": "2024-08-17T14:55:00.000"
                },
                {
                    "id": 12,
                    "nick_name": "Sandy",
                    "first_name": "Sandra",
                    "last_name": "White",
                    "e_mail": "sandra.white@example.com",
                    "phone": "+16505557890",
                    "created_at": "2024-08-17T14:56:00.000",
                    "updated_at": "2024-08-17T14:56:00.000"
                },
                {
                    "id": 13,
                    "nick_name": "Jim",
                    "first_name": "James",
                    "last_name": "Green",
                    "e_mail": "james.green@example.com",
                    "phone": "+16505557654",
                    "created_at": "2024-08-17T14:57:00.000",
                    "updated_at": "2024-08-17T14:57:00.000"
                },
                {
                    "id": 14,
                    "nick_name": "Nina",
                    "first_name": "Nina",
                    "last_name": "Scott",
                    "e_mail": "nina.scott@example.com",
                    "phone": "+16505558923",
                    "created_at": "2024-08-17T14:58:00.000",
                    "updated_at": "2024-08-17T14:58:00.000"
                },
                {
                    "id": 15,
                    "nick_name": "Bill",
                    "first_name": "William",
                    "last_name": "Martin",
                    "e_mail": "william.martin@example.com",
                    "phone": "+16505551234",
                    "created_at": "2024-08-17T14:59:00.000",
                    "updated_at": "2024-08-17T14:59:00.000"
                }
            ]
        },
        {
            "id": 4,
            "name": "East Bay Tranquility Spa",
            "description": "Offering peace and tranquility in the East Bay area.",
            "created_at": "2024-08-17T15:00:00.000",
            "updated_at": "2024-08-17T15:00:00.000",
            "address": {
                id: 4,
                location_name: "East Bay Tranquility Spa",
                first_name: "Diana",
                last_name: "Ross",
                street1: "1234 Broadway",
                street2: "",
                city: "Oakland",
                state: "CA",
                country: "US",
                zip_code: "94612"
            },
            "location": {
                "location_id": 4,
                "address_id": 4,
                "created_at": "2024-08-17T15:00:00.000",
                "updated_at": "2024-08-17T15:00:00.000",
                "location_name": "East Bay Tranquility Spa",
                "latitude": 37.8044,
                "longitude": -122.2711,
                "address_first_name": "Diana",
                "address_last_name": "Ross",
                "street1": "1234 Broadway",
                "street2": "",
                "city": "Oakland",
                "state": "CA",
                "country": "US",
                "zip_code": "94612"
            },
            "employees": [
                {
                    "id": 16,
                    "nick_name": "Di",
                    "first_name": "Diana",
                    "last_name": "Ross",
                    "e_mail": "diana.ross@example.com",
                    "phone": "+15105551234",
                    "created_at": "2024-08-17T15:05:00.000",
                    "updated_at": "2024-08-17T15:05:00.000"
                },
                {
                    "id": 17,
                    "nick_name": "Joe",
                    "first_name": "Joseph",
                    "last_name": "Harris",
                    "e_mail": "joseph.harris@example.com",
                    "phone": "+15105556789",
                    "created_at": "2024-08-17T15:06:00.000",
                    "updated_at": "2024-08-17T15:06:00.000"
                },
                {
                    "id": 18,
                    "nick_name": "Mary",
                    "first_name": "Mary",
                    "last_name": "Clark",
                    "e_mail": "mary.clark@example.com",
                    "phone": "+15105557654",
                    "created_at": "2024-08-17T15:07:00.000",
                    "updated_at": "2024-08-17T15:07:00.000"
                },
                {
                    "id": 19,
                    "nick_name": "Sam",
                    "first_name": "Samuel",
                    "last_name": "Lewis",
                    "e_mail": "samuel.lewis@example.com",
                    "phone": "+15105558923",
                    "created_at": "2024-08-17T15:08:00.000",
                    "updated_at": "2024-08-17T15:08:00.000"
                },
                {
                    "id": 20,
                    "nick_name": "Anna",
                    "first_name": "Anna",
                    "last_name": "Walker",
                    "e_mail": "anna.walker@example.com",
                    "phone": "+15105551234",
                    "created_at": "2024-08-17T15:09:00.000",
                    "updated_at": "2024-08-17T15:09:00.000"
                }
            ]
        },
        {
            "id": 5,
            "name": "Palo Alto Zen Spa",
            "description": "A zen-inspired spa in the tech hub of Palo Alto.",
            "created_at": "2024-08-17T15:10:00.000",
            "updated_at": "2024-08-17T15:10:00.000",
            "address": {
                id: 5,
                location_name: "Palo Alto Zen Spa",
                first_name: "Eve",
                last_name: "Adams",
                street1: "567 University Ave",
                street2: "",
                city: "Palo Alto",
                state: "CA",
                country: "US",
                zip_code: "94301"
            },
            "location": {
                "location_id": 5,
                "address_id": 5,
                "created_at": "2024-08-17T15:10:00.000",
                "updated_at": "2024-08-17T15:10:00.000",
                "location_name": "Palo Alto Zen Spa",
                "latitude": 37.4419,
                "longitude": -122.1430,
                "address_first_name": "Eve",
                "address_last_name": "Adams",
                "street1": "567 University Ave",
                "street2": "",
                "city": "Palo Alto",
                "state": "CA",
                "country": "US",
                "zip_code": "94301"
            },
            "employees": [
                {
                    "id": 21,
                    "nick_name": "Evie",
                    "first_name": "Eve",
                    "last_name": "Adams",
                    "e_mail": "eve.adams@example.com",
                    "phone": "+16505556789",
                    "created_at": "2024-08-17T15:15:00.000",
                    "updated_at": "2024-08-17T15:15:00.000"
                },
                {
                    "id": 22,
                    "nick_name": "Ben",
                    "first_name": "Benjamin",
                    "last_name": "Nelson",
                    "e_mail": "benjamin.nelson@example.com",
                    "phone": "+16505557890",
                    "created_at": "2024-08-17T15:16:00.000",
                    "updated_at": "2024-08-17T15:16:00.000"
                },
                {
                    "id": 23,
                    "nick_name": "Tina",
                    "first_name": "Tina",
                    "last_name": "Carter",
                    "e_mail": "tina.carter@example.com",
                    "phone": "+16505551234",
                    "created_at": "2024-08-17T15:17:00.000",
                    "updated_at": "2024-08-17T15:17:00.000"
                },
                {
                    "id": 24,
                    "nick_name": "Ron",
                    "first_name": "Ronald",
                    "last_name": "Mitchell",
                    "e_mail": "ronald.mitchell@example.com",
                    "phone": "+16505557654",
                    "created_at": "2024-08-17T15:18:00.000",
                    "updated_at": "2024-08-17T15:18:00.000"
                },
                {
                    "id": 25,
                    "nick_name": "Cathy",
                    "first_name": "Catherine",
                    "last_name": "Perez",
                    "e_mail": "catherine.perez@example.com",
                    "phone": "+16505558923",
                    "created_at": "2024-08-17T15:19:00.000",
                    "updated_at": "2024-08-17T15:19:00.000"
                }
            ]
        }
    ];

export const mockStoreServices = [
    {
        "store_id": 1,
        "services": [
            {
                "id": 1,
                "duration": 60,
                "price": 100.00,
                "name": "Full Body Massage",
                "description": "A relaxing full body massage.",
                "categories": [
                    {
                        "id": 1,
                        "name": "Massage",
                        "description": "Massage category"
                    }
                ],
                "sub_categories": [
                    {
                        "id": 1,
                        "name": "Relaxation",
                        "description": "Relaxation massages"
                    },
                    {
                        "id": 2,
                        "name": "Therapeutic",
                        "description": "Therapeutic massages"
                    }
                ]
            },
            {
                "id": 2,
                "duration": 30,
                "price": 50.00,
                "name": "Facial Treatment",
                "description": "A rejuvenating facial treatment.",
                "categories": [
                    {
                        "id": 2,
                        "name": "Skincare",
                        "description": "Skincare category"
                    }
                ],
                "sub_categories": [
                    {
                        "id": 3,
                        "name": "Anti-Aging",
                        "description": "Anti-aging treatments"
                    },
                    {
                        "id": 4,
                        "name": "Cleansing",
                        "description": "Cleansing treatments"
                    }
                ]
            }
        ]
    },
    {
        "store_id": 2,
        "services": [
            {
                "id": 3,
                "duration": 45,
                "price": 75.00,
                "name": "Deep Tissue Massage",
                "description": "A deep tissue massage for pain relief.",
                "categories": [
                    {
                        "id": 1,
                        "name": "Massage",
                        "description": "Massage category"
                    }
                ],
                "sub_categories": [
                    {
                        "id": 2,
                        "name": "Therapeutic",
                        "description": "Therapeutic massages"
                    }
                ]
            },
            {
                "id": 4,
                "duration": 60,
                "price": 120.00,
                "name": "Hot Stone Massage",
                "description": "A hot stone massage for ultimate relaxation.",
                "categories": [
                    {
                        "id": 1,
                        "name": "Massage",
                        "description": "Massage category"
                    }
                ],
                "sub_categories": [
                    {
                        "id": 1,
                        "name": "Relaxation",
                        "description": "Relaxation massages"
                    }
                ]
            }
        ]
    },
    {
        "store_id": 3,
        "services": [
            {
                "id": 5,
                "duration": 30,
                "price": 75.00,
                "name": "Reflexology",
                "description": "A foot reflexology session.",
                "categories": [
                    {
                        "id": 3,
                        "name": "Wellness",
                        "description": "Wellness category"
                    }
                ],
                "sub_categories": [
                    {
                        "id": 5,
                        "name": "Foot Care",
                        "description": "Foot care services"
                    }
                ]
            },
            {
                "id": 6,
                "duration": 90,
                "price": 150.00,
                "name": "Couples Massage",
                "description": "A relaxing massage for couples.",
                "categories": [
                    {
                        "id": 1,
                        "name": "Massage",
                        "description": "Massage category"
                    }
                ],
                "sub_categories": [
                    {
                        "id": 1,
                        "name": "Relaxation",
                        "description": "Relaxation massages"
                    }
                ]
            }
        ]
    },
    {
        "store_id": 4,
        "services": [
            {
                "id": 7,
                "duration": 30,
                "price": 50.00,
                "name": "Haircut",
                "description": "A standard haircut.",
                "categories": [
                    {
                        "id": 4,
                        "name": "Hair",
                        "description": "Hair category"
                    }
                ],
                "sub_categories": [
                    {
                        "id": 1,
                        "name": "Women",
                        "description": "Services provided to women"
                    },
                    {
                        "id": 2,
                        "name": "Men",
                        "description": "Services provided to men"
                    }
                ]
            },
            {
                "id": 8,
                "duration": 60,
                "price": 90.00,
                "name": "Hair Coloring",
                "description": "Professional hair coloring services.",
                "categories": [
                    {
                        "id": 4,
                        "name": "Hair",
                        "description": "Hair category"
                    }
                ],
                "sub_categories": [
                    {
                        "id": 3,
                        "name": "Color",
                        "description": "Hair coloring services"
                    }
                ]
            }
        ]
    },
    {
        "store_id": 5,
        "services": [
            {
                "id": 9,
                "duration": 30,
                "price": 70.00,
                "name": "Zen Meditation Session",
                "description": "A guided zen meditation session.",
                "categories": [
                    {
                        "id": 5,
                        "name": "Mindfulness",
                        "description": "Mindfulness category"
                    }
                ],
                "sub_categories": [
                    {
                        "id": 6,
                        "name": "Meditation",
                        "description": "Meditation services"
                    }
                ]
            },
            {
                "id": 10,
                "duration": 60,
                "price": 110.00,
                "name": "Aromatherapy Massage",
                "description": "A relaxing massage with aromatherapy oils.",
                "categories": [
                    {
                        "id": 1,
                        "name": "Massage",
                        "description": "Massage category"
                    }
                ],
                "sub_categories": [
                    {
                        "id": 1,
                        "name": "Relaxation",
                        "description": "Relaxation massages"
                    }
                ]
            }
        ]
    }
];

export const mockStoreAppointments = [
    {
        "store_id": 1,
        "appointments": [
            new Appointment(
                1, // appointment_id
                "", // appointment_notes
                "2023-06-23 14:30", // appointment_start_date
                3, // appointment_status (Completed)
                new AppointmentService(
                    1, // service_id
                    60, // service_duration (min)
                    100, // service_price
                    "USD", // service_currency
                    "Full Body Massage", // service_name
                    "" // service_description
                )
            ),
            new Appointment(
                2, // appointment_id
                "", // appointment_notes
                "2023-07-02 10:00", // appointment_start_date
                1, // appointment_status (Scheduled)
                new AppointmentService(
                    2, // service_id
                    30, // service_duration (min)
                    50, // service_price
                    "USD", // service_currency
                    "Facial Treatment", // service_name
                    "" // service_description
                )
            ),
            new Appointment(
                3, // appointment_id
                "", // appointment_notes
                "2023-07-05 16:00", // appointment_start_date
                2, // appointment_status (Canceled)
                new AppointmentService(
                    3, // service_id
                    60, // service_duration (min)
                    100, // service_price
                    "USD", // service_currency
                    "Full Body Massage", // service_name
                    "" // service_description
                )
            ),
            new Appointment(
                4, // appointment_id
                "", // appointment_notes
                "2023-07-07 11:30", // appointment_start_date
                3, // appointment_status (Completed)
                new AppointmentService(
                    4, // service_id
                    30, // service_duration (min)
                    50, // service_price
                    "USD", // service_currency
                    "Facial Treatment", // service_name
                    "" // service_description
                )
            ),
            new Appointment(
                5, // appointment_id
                "", // appointment_notes
                "2023-07-10 14:00", // appointment_start_date
                1, // appointment_status (Scheduled)
                new AppointmentService(
                    5, // service_id
                    60, // service_duration (min)
                    100, // service_price
                    "USD", // service_currency
                    "Full Body Massage", // service_name
                    "" // service_description
                )
            ),
            new Appointment(
                6, // appointment_id
                "", // appointment_notes
                "2023-07-15 09:30", // appointment_start_date
                3, // appointment_status (Completed)
                new AppointmentService(
                    6, // service_id
                    30, // service_duration (min)
                    50, // service_price
                    "USD", // service_currency
                    "Facial Treatment", // service_name
                    "" // service_description
                )
            ),
            new Appointment(
                7, // appointment_id
                "", // appointment_notes
                "2023-07-18 12:00", // appointment_start_date
                3, // appointment_status (Completed)
                new AppointmentService(
                    7, // service_id
                    60, // service_duration (min)
                    100, // service_price
                    "USD", // service_currency
                    "Full Body Massage", // service_name
                    "" // service_description
                )
            ),
            new Appointment(
                8, // appointment_id
                "", // appointment_notes
                "2023-07-20 15:30", // appointment_start_date
                1, // appointment_status (Scheduled)
                new AppointmentService(
                    8, // service_id
                    30, // service_duration (min)
                    50, // service_price
                    "USD", // service_currency
                    "Facial Treatment", // service_name
                    "" // service_description
                )
            ),
            new Appointment(
                9, // appointment_id
                "", // appointment_notes
                "2023-07-22 14:00", // appointment_start_date
                2, // appointment_status (Canceled)
                new AppointmentService(
                    9, // service_id
                    60, // service_duration (min)
                    100, // service_price
                    "USD", // service_currency
                    "Full Body Massage", // service_name
                    "" // service_description
                )
            ),
            new Appointment(
                10, // appointment_id
                "", // appointment_notes
                "2023-07-25 13:00", // appointment_start_date
                3, // appointment_status (Completed)
                new AppointmentService(
                    10, // service_id
                    30, // service_duration (min)
                    50, // service_price
                    "USD", // service_currency
                    "Facial Treatment", // service_name
                    "" // service_description
                )
            )
        ]
    },
    {
        "store_id": 2,
        "appointments": [
            new Appointment(
                11, // appointment_id
                "", // appointment_notes
                "2023-06-20 10:00", // appointment_start_date
                3, // appointment_status (Completed)
                new AppointmentService(
                    11, // service_id
                    45, // service_duration (min)
                    75, // service_price
                    "USD", // service_currency
                    "Deep Tissue Massage", // service_name
                    "" // service_description
                )
            ),
            new Appointment(
                12, // appointment_id
                "", // appointment_notes
                "2023-06-25 12:00", // appointment_start_date
                1, // appointment_status (Scheduled)
                new AppointmentService(
                    12, // service_id
                    60, // service_duration (min)
                    120, // service_price
                    "USD", // service_currency
                    "Hot Stone Massage", // service_name
                    "" // service_description
                )
            ),
            new Appointment(
                13, // appointment_id
                "", // appointment_notes
                "2023-06-30 15:00", // appointment_start_date
                2, // appointment_status (Canceled)
                new AppointmentService(
                    13, // service_id
                    45, // service_duration (min)
                    75, // service_price
                    "USD", // service_currency
                    "Deep Tissue Massage", // service_name
                    "" // service_description
                )
            ),
            new Appointment(
                14, // appointment_id
                "", // appointment_notes
                "2023-07-03 14:30", // appointment_start_date
                3, // appointment_status (Completed)
                new AppointmentService(
                    14, // service_id
                    60, // service_duration (min)
                    120, // service_price
                    "USD", // service_currency
                    "Hot Stone Massage", // service_name
                    "" // service_description
                )
            ),
            new Appointment(
                15, // appointment_id
                "", // appointment_notes
                "2023-07-05 11:00", // appointment_start_date
                1, // appointment_status (Scheduled)
                new AppointmentService(
                    15, // service_id
                    45, // service_duration (min)
                    75, // service_price
                    "USD", // service_currency
                    "Deep Tissue Massage", // service_name
                    "" // service_description
                )
            ),
            new Appointment(
                16, // appointment_id
                "", // appointment_notes
                "2023-07-08 09:30", // appointment_start_date
                3, // appointment_status (Completed)
                new AppointmentService(
                    16, // service_id
                    60, // service_duration (min)
                    120, // service_price
                    "USD", // service_currency
                    "Hot Stone Massage", // service_name
                    "" // service_description
                )
            ),
            new Appointment(
                17, // appointment_id
                "", // appointment_notes
                "2023-07-10 14:30", // appointment_start_date
                3, // appointment_status (Completed)
                new AppointmentService(
                    17, // service_id
                    45, // service_duration (min)
                    75, // service_price
                    "USD", // service_currency
                    "Deep Tissue Massage", // service_name
                    "" // service_description
                )
            ),
            new Appointment(
                18, // appointment_id
                "", // appointment_notes
                "2023-07-12 13:00", // appointment_start_date
                1, // appointment_status (Scheduled)
                new AppointmentService(
                    18, // service_id
                    60, // service_duration (min)
                    120, // service_price
                    "USD", // service_currency
                    "Hot Stone Massage", // service_name
                    "" // service_description
                )
            ),
            new Appointment(
                19, // appointment_id
                "", // appointment_notes
                "2023-07-15 16:00", // appointment_start_date
                2, // appointment_status (Canceled)
                new AppointmentService(
                    19, // service_id
                    45, // service_duration (min)
                    75, // service_price
                    "USD", // service_currency
                    "Deep Tissue Massage", // service_name
                    "" // service_description
                )
            ),
            new Appointment(
                20, // appointment_id
                "", // appointment_notes
                "2023-07-18 10:30", // appointment_start_date
                3, // appointment_status (Completed)
                new AppointmentService(
                    20, // service_id
                    60, // service_duration (min)
                    120, // service_price
                    "USD", // service_currency
                    "Hot Stone Massage", // service_name
                    "" // service_description
                )
            )
        ]
    },
    {
        "store_id": 3,
        "appointments": [
            new Appointment(
                11, // appointment_id
                "", // appointment_notes
                "2023-06-20 10:00", // appointment_start_date
                3, // appointment_status (Completed)
                new AppointmentService(
                    11, // service_id
                    45, // service_duration (min)
                    75, // service_price
                    "USD", // service_currency
                    "Deep Tissue Massage", // service_name
                    "" // service_description
                )
            ),
            new Appointment(
                12, // appointment_id
                "", // appointment_notes
                "2023-06-25 12:00", // appointment_start_date
                1, // appointment_status (Scheduled)
                new AppointmentService(
                    12, // service_id
                    60, // service_duration (min)
                    120, // service_price
                    "USD", // service_currency
                    "Hot Stone Massage", // service_name
                    "" // service_description
                )
            ),
            new Appointment(
                13, // appointment_id
                "", // appointment_notes
                "2023-06-30 15:00", // appointment_start_date
                2, // appointment_status (Canceled)
                new AppointmentService(
                    13, // service_id
                    45, // service_duration (min)
                    75, // service_price
                    "USD", // service_currency
                    "Deep Tissue Massage", // service_name
                    "" // service_description
                )
            ),
            new Appointment(
                14, // appointment_id
                "", // appointment_notes
                "2023-07-03 14:30", // appointment_start_date
                3, // appointment_status (Completed)
                new AppointmentService(
                    14, // service_id
                    60, // service_duration (min)
                    120, // service_price
                    "USD", // service_currency
                    "Hot Stone Massage", // service_name
                    "" // service_description
                )
            ),
            new Appointment(
                15, // appointment_id
                "", // appointment_notes
                "2023-07-05 11:00", // appointment_start_date
                1, // appointment_status (Scheduled)
                new AppointmentService(
                    15, // service_id
                    45, // service_duration (min)
                    75, // service_price
                    "USD", // service_currency
                    "Deep Tissue Massage", // service_name
                    "" // service_description
                )
            ),
            new Appointment(
                16, // appointment_id
                "", // appointment_notes
                "2023-07-08 09:30", // appointment_start_date
                3, // appointment_status (Completed)
                new AppointmentService(
                    16, // service_id
                    60, // service_duration (min)
                    120, // service_price
                    "USD", // service_currency
                    "Hot Stone Massage", // service_name
                    "" // service_description
                )
            ),
            new Appointment(
                17, // appointment_id
                "", // appointment_notes
                "2023-07-10 14:30", // appointment_start_date
                3, // appointment_status (Completed)
                new AppointmentService(
                    17, // service_id
                    45, // service_duration (min)
                    75, // service_price
                    "USD", // service_currency
                    "Deep Tissue Massage", // service_name
                    "" // service_description
                )
            ),
            new Appointment(
                18, // appointment_id
                "", // appointment_notes
                "2023-07-12 13:00", // appointment_start_date
                1, // appointment_status (Scheduled)
                new AppointmentService(
                    18, // service_id
                    60, // service_duration (min)
                    120, // service_price
                    "USD", // service_currency
                    "Hot Stone Massage", // service_name
                    "" // service_description
                )
            ),
            new Appointment(
                19, // appointment_id
                "", // appointment_notes
                "2023-07-15 16:00", // appointment_start_date
                2, // appointment_status (Canceled)
                new AppointmentService(
                    19, // service_id
                    45, // service_duration (min)
                    75, // service_price
                    "USD", // service_currency
                    "Deep Tissue Massage", // service_name
                    "" // service_description
                )
            ),
            new Appointment(
                20, // appointment_id
                "", // appointment_notes
                "2023-07-18 10:30", // appointment_start_date
                3, // appointment_status (Completed)
                new AppointmentService(
                    20, // service_id
                    60, // service_duration (min)
                    120, // service_price
                    "USD", // service_currency
                    "Hot Stone Massage", // service_name
                    "" // service_description
                )
            )
        ]
    },
    {
        "store_id": 4,
        "appointments": [
            new Appointment(
                11, // appointment_id
                "", // appointment_notes
                "2023-06-20 10:00", // appointment_start_date
                3, // appointment_status (Completed)
                new AppointmentService(
                    11, // service_id
                    45, // service_duration (min)
                    75, // service_price
                    "USD", // service_currency
                    "Deep Tissue Massage", // service_name
                    "" // service_description
                )
            ),
            new Appointment(
                12, // appointment_id
                "", // appointment_notes
                "2023-06-25 12:00", // appointment_start_date
                1, // appointment_status (Scheduled)
                new AppointmentService(
                    12, // service_id
                    60, // service_duration (min)
                    120, // service_price
                    "USD", // service_currency
                    "Hot Stone Massage", // service_name
                    "" // service_description
                )
            ),
            new Appointment(
                13, // appointment_id
                "", // appointment_notes
                "2023-06-30 15:00", // appointment_start_date
                2, // appointment_status (Canceled)
                new AppointmentService(
                    13, // service_id
                    45, // service_duration (min)
                    75, // service_price
                    "USD", // service_currency
                    "Deep Tissue Massage", // service_name
                    "" // service_description
                )
            ),
            new Appointment(
                14, // appointment_id
                "", // appointment_notes
                "2023-07-03 14:30", // appointment_start_date
                3, // appointment_status (Completed)
                new AppointmentService(
                    14, // service_id
                    60, // service_duration (min)
                    120, // service_price
                    "USD", // service_currency
                    "Hot Stone Massage", // service_name
                    "" // service_description
                )
            ),
            new Appointment(
                15, // appointment_id
                "", // appointment_notes
                "2023-07-05 11:00", // appointment_start_date
                1, // appointment_status (Scheduled)
                new AppointmentService(
                    15, // service_id
                    45, // service_duration (min)
                    75, // service_price
                    "USD", // service_currency
                    "Deep Tissue Massage", // service_name
                    "" // service_description
                )
            ),
            new Appointment(
                16, // appointment_id
                "", // appointment_notes
                "2023-07-08 09:30", // appointment_start_date
                3, // appointment_status (Completed)
                new AppointmentService(
                    16, // service_id
                    60, // service_duration (min)
                    120, // service_price
                    "USD", // service_currency
                    "Hot Stone Massage", // service_name
                    "" // service_description
                )
            ),
            new Appointment(
                17, // appointment_id
                "", // appointment_notes
                "2023-07-10 14:30", // appointment_start_date
                3, // appointment_status (Completed)
                new AppointmentService(
                    17, // service_id
                    45, // service_duration (min)
                    75, // service_price
                    "USD", // service_currency
                    "Deep Tissue Massage", // service_name
                    "" // service_description
                )
            ),
            new Appointment(
                18, // appointment_id
                "", // appointment_notes
                "2023-07-12 13:00", // appointment_start_date
                1, // appointment_status (Scheduled)
                new AppointmentService(
                    18, // service_id
                    60, // service_duration (min)
                    120, // service_price
                    "USD", // service_currency
                    "Hot Stone Massage", // service_name
                    "" // service_description
                )
            ),
            new Appointment(
                19, // appointment_id
                "", // appointment_notes
                "2023-07-15 16:00", // appointment_start_date
                2, // appointment_status (Canceled)
                new AppointmentService(
                    19, // service_id
                    45, // service_duration (min)
                    75, // service_price
                    "USD", // service_currency
                    "Deep Tissue Massage", // service_name
                    "" // service_description
                )
            ),
            new Appointment(
                20, // appointment_id
                "", // appointment_notes
                "2023-07-18 10:30", // appointment_start_date
                3, // appointment_status (Completed)
                new AppointmentService(
                    20, // service_id
                    60, // service_duration (min)
                    120, // service_price
                    "USD", // service_currency
                    "Hot Stone Massage", // service_name
                    "" // service_description
                )
            )
        ]
    },
    {
        "store_id": 5,
        "appointments": [
            new Appointment(
                11, // appointment_id
                "", // appointment_notes
                "2023-06-20 10:00", // appointment_start_date
                3, // appointment_status (Completed)
                new AppointmentService(
                    11, // service_id
                    45, // service_duration (min)
                    75, // service_price
                    "USD", // service_currency
                    "Deep Tissue Massage", // service_name
                    "" // service_description
                )
            ),
            new Appointment(
                12, // appointment_id
                "", // appointment_notes
                "2023-06-25 12:00", // appointment_start_date
                1, // appointment_status (Scheduled)
                new AppointmentService(
                    12, // service_id
                    60, // service_duration (min)
                    120, // service_price
                    "USD", // service_currency
                    "Hot Stone Massage", // service_name
                    "" // service_description
                )
            ),
            new Appointment(
                13, // appointment_id
                "", // appointment_notes
                "2023-06-30 15:00", // appointment_start_date
                2, // appointment_status (Canceled)
                new AppointmentService(
                    13, // service_id
                    45, // service_duration (min)
                    75, // service_price
                    "USD", // service_currency
                    "Deep Tissue Massage", // service_name
                    "" // service_description
                )
            ),
            new Appointment(
                14, // appointment_id
                "", // appointment_notes
                "2023-07-03 14:30", // appointment_start_date
                3, // appointment_status (Completed)
                new AppointmentService(
                    14, // service_id
                    60, // service_duration (min)
                    120, // service_price
                    "USD", // service_currency
                    "Hot Stone Massage", // service_name
                    "" // service_description
                )
            ),
            new Appointment(
                15, // appointment_id
                "", // appointment_notes
                "2023-07-05 11:00", // appointment_start_date
                1, // appointment_status (Scheduled)
                new AppointmentService(
                    15, // service_id
                    45, // service_duration (min)
                    75, // service_price
                    "USD", // service_currency
                    "Deep Tissue Massage", // service_name
                    "" // service_description
                )
            ),
            new Appointment(
                16, // appointment_id
                "", // appointment_notes
                "2023-07-08 09:30", // appointment_start_date
                3, // appointment_status (Completed)
                new AppointmentService(
                    16, // service_id
                    60, // service_duration (min)
                    120, // service_price
                    "USD", // service_currency
                    "Hot Stone Massage", // service_name
                    "" // service_description
                )
            ),
            new Appointment(
                17, // appointment_id
                "", // appointment_notes
                "2023-07-10 14:30", // appointment_start_date
                3, // appointment_status (Completed)
                new AppointmentService(
                    17, // service_id
                    45, // service_duration (min)
                    75, // service_price
                    "USD", // service_currency
                    "Deep Tissue Massage", // service_name
                    "" // service_description
                )
            ),
            new Appointment(
                18, // appointment_id
                "", // appointment_notes
                "2023-07-12 13:00", // appointment_start_date
                1, // appointment_status (Scheduled)
                new AppointmentService(
                    18, // service_id
                    60, // service_duration (min)
                    120, // service_price
                    "USD", // service_currency
                    "Hot Stone Massage", // service_name
                    "" // service_description
                )
            ),
            new Appointment(
                19, // appointment_id
                "", // appointment_notes
                "2023-07-15 16:00", // appointment_start_date
                2, // appointment_status (Canceled)
                new AppointmentService(
                    19, // service_id
                    45, // service_duration (min)
                    75, // service_price
                    "USD", // service_currency
                    "Deep Tissue Massage", // service_name
                    "" // service_description
                )
            ),
            new Appointment(
                20, // appointment_id
                "", // appointment_notes
                "2023-07-18 10:30", // appointment_start_date
                3, // appointment_status (Completed)
                new AppointmentService(
                    20, // service_id
                    60, // service_duration (min)
                    120, // service_price
                    "USD", // service_currency
                    "Hot Stone Massage", // service_name
                    "" // service_description
                )
            )
        ]
    },
];


export const serviceCategories: ServiceCategoriesProps = {
    "categories": [
        {
            "id": 1,
            "name": "Hair",
            "description": "Hair category"
        },
        {
            "id": 2,
            "name": "Nail",
            "description": "Nail category"
        },
        {
            "id": 3,
            "name": "Massage",
            "description": "Massage category"
        },
        {
            "id": 4,
            "name": "Spa",
            "description": "Spa category"
        },
        {
            "id": 5,
            "name": "Wellness",
            "description": "Wellness category"
        }
    ],
    "sub_categories": [
        {
            "id": 1,
            "name": "Women",
            "description": "Services provided to women"
        },
        {
            "id": 2,
            "name": "Men",
            "description": "Services provided to men"
        },
        {
            "id": 3,
            "name": "Kids",
            "description": "Services provided to kids"
        },
        {
            "id": 4,
            "name": "Dogs",
            "description": "Services provided to dogs"
        },
        {
            "id": 5,
            "name": "Cats",
            "description": "Services provided to cats"
        }
    ]
};
