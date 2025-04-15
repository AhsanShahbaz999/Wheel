const cars = [
  {
    category: "Crossover",
    name: "Toyota RAV4",
    price: 32000,
    year: 2021,
    mileage: 25000,
    location: "New York",
    image: "/uploads/car-1.PNG",
    fuelType: "Petrol",
    transmission: "Automatic",
    condition: "Used",
    description: "A reliable SUV with great fuel efficiency and spacious interior.",
    features: ["Bluetooth", "Backup Camera", "Heated Seats"],
    seller: {
      name: "John Doe",
      phone: "+1 234 567 890",
      email: "john.doe@example.com"
    }
  },
  {
    category: "Crossover",
    name: "Honda CR-V",
    price: 31000,
    year: 2022,
    mileage: 20000,
    location: "Los Angeles",
    image: "/uploads/car-2.PNG",
    fuelType: "Hybrid",
    transmission: "Automatic",
    condition: "New",
    description: "A modern hybrid crossover with advanced safety features.",
    features: ["Sunroof", "Adaptive Cruise Control", "Apple CarPlay"],
    seller: {
      name: "Jane Smith",
      phone: "+1 987 654 321",
      email: "jane.smith@example.com"
    }
  },
  {
    category: "Sedan",
    name: "Honda Accord",
    price: 28000,
    year: 2020,
    mileage: 30000,
    location: "Chicago",
    image: "/uploads/car-3.PNG",
    fuelType: "Petrol",
    transmission: "Manual",
    condition: "Used",
    description: "A stylish and comfortable sedan with a smooth driving experience.",
    features: ["Leather Seats", "Navigation System", "Blind Spot Monitor"],
    seller: {
      name: "Robert Brown",
      phone: "+1 456 789 123",
      email: "robert.brown@example.com"
    }
  },
  {
    category: "SUV",
    name: "Ford Explorer",
    price: 40000,
    year: 2023,
    mileage: 15000,
    location: "Houston",
    image: "/uploads/car-4.PNG",
    fuelType: "Diesel",
    transmission: "Automatic",
    condition: "New",
    description: "A powerful SUV with off-road capabilities and spacious seating.",
    features: ["4WD", "Panoramic Sunroof", "Keyless Entry"],
    seller: {
      name: "Emily Davis",
      phone: "+1 321 654 987",
      email: "emily.davis@example.com"
    }
  },
  {
    category: "Truck",
    name: "Ford F-150",
    price: 45000,
    year: 2022,
    mileage: 10000,
    location: "Phoenix",
    image: "/uploads/car-5.PNG",
    fuelType: "Diesel",
    transmission: "Automatic",
    condition: "New",
    description: "A rugged pickup truck with high towing capacity and durability.",
    features: ["Tow Package", "Rearview Camera", "Remote Start"],
    seller: {
      name: "David Wilson",
      phone: "+1 654 987 321",
      email: "david.wilson@example.com"
    }
  },
  {
    category: "Convertible",
    name: "Mazda MX-5",
    price: 35000,
    year: 2021,
    mileage: 18000,
    location: "San Diego",
    image: "/uploads/car-6.PNG",
    fuelType: "Petrol",
    transmission: "Manual",
    condition: "Used",
    description: "A fun-to-drive convertible sports car with sleek design.",
    features: ["Convertible Roof", "Sport Mode", "Bose Sound System"],
    seller: {
      name: "Sophia Martinez",
      phone: "+1 987 321 654",
      email: "sophia.martinez@example.com"
    }
  },
  {
    category: "Hatchback",
    name: "Volkswagen Golf",
    price: 27000,
    year: 2020,
    mileage: 22000,
    location: "San Francisco",
    image: "/uploads/car-7.PNG",
    fuelType: "Petrol",
    transmission: "Automatic",
    condition: "Used",
    description: "A compact hatchback with excellent fuel economy and comfort.",
    features: ["Parking Sensors", "Lane Assist", "Android Auto"],
    seller: {
      name: "Daniel Lee",
      phone: "+1 789 123 456",
      email: "daniel.lee@example.com"
    }
  },
  {
    category: "SUV",
    name: "Chevrolet Tahoe",
    price: 50000,
    year: 2023,
    mileage: 12000,
    location: "Dallas",
    image: "/uploads/car-8.PNG",
    fuelType: "Petrol",
    transmission: "Automatic",
    condition: "New",
    description: "A full-size SUV with luxury features and strong engine performance.",
    features: ["Heated Seats", "Wireless Charging", "Adaptive Cruise Control"],
    seller: {
      name: "Olivia White",
      phone: "+1 852 369 741",
      email: "olivia.white@example.com"
    }
  },
  {
    category: "Luxury",
    name: "BMW X5",
    price: 65000,
    year: 2023,
    mileage: 8000,
    location: "Miami",
    image: "/uploads/car-9.PNG",
    fuelType: "Petrol",
    transmission: "Automatic",
    condition: "New",
    description: "A premium luxury SUV with high-tech features and a powerful engine.",
    features: ["Ambient Lighting", "Harman Kardon Sound", "Heads-Up Display"],
    seller: {
      name: "William Clark",
      phone: "+1 963 741 852",
      email: "william.clark@example.com"
    }
  },
  {
    category: "Electric",
    name: "Tesla Model 3",
    price: 55000,
    year: 2022,
    mileage: 5000,
    location: "Seattle",
    image: "/uploads/car-10.PNG",
    fuelType: "Electric",
    transmission: "Automatic",
    condition: "New",
    description: "A high-tech electric sedan with fast acceleration and autopilot features.",
    features: ["Autopilot", "Long Range Battery", "Wireless Phone Charging"],
    seller: {
      name: "Emma Johnson",
      phone: "+1 741 852 963",
      email: "emma.johnson@example.com"
    }
  }
];

module.exports = cars;
