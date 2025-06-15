
const fishingSpots = [
    {
        id: '1',
        name: 'Henry\'s Fork',
        difficulty: 'Advanced',
        bestSeason: 'Summer',
        fishSpecies: ['Rainbow Trout', 'Brown Trout', 'Cutthroat Trout'],
        description: 'Known as one of the most challenging and rewarding fly fishing destinations in the world. The Henry\'s Fork is famous for its large, selective trout and technical fishing conditions.',
        location: 'Island Park, Idaho',
        access: 'Multiple access points along Highway 20',
        image: 'images/henrys-fork.jpg'
    },
    {
        id: '2',
        name: 'South Fork Snake River',
        difficulty: 'Intermediate',
        bestSeason: 'Spring to Fall',
        fishSpecies: ['Cutthroat Trout', 'Rainbow Trout', 'Brown Trout'],
        description: 'The South Fork of the Snake River offers excellent dry fly fishing and beautiful scenery. The river is known for its healthy population of native Yellowstone cutthroat trout.',
        location: 'Irwin, Idaho',
        access: 'Multiple boat ramps and public access points',
        image: 'images/south-fork.jpg'
    },
    {
        id: '3',
        name: 'Teton River',
        difficulty: 'Beginner',
        bestSeason: 'Summer',
        fishSpecies: ['Rainbow Trout', 'Cutthroat Trout', 'Brook Trout'],
        description: 'A perfect river for beginners, the Teton River offers easy wading and consistent fishing. The river is known for its beautiful scenery and abundant trout population.',
        location: 'Driggs, Idaho',
        access: 'Multiple public access points along the river',
        image: 'images/teton-river.jpg'
    },
    {
        id: '4',
        name: 'Big Lost River',
        difficulty: 'Intermediate',
        bestSeason: 'Spring to Fall',
        fishSpecies: ['Rainbow Trout', 'Brown Trout'],
        description: 'The Big Lost River offers excellent fishing for both rainbow and brown trout. The river features a mix of pocket water and pools, making it suitable for various fishing techniques.',
        location: 'Mackay, Idaho',
        access: 'Public access points along Highway 93',
        image: 'images/big-lost.jpg'
    },
    {
        id: '5',
        name: 'Silver Creek',
        difficulty: 'Advanced',
        bestSeason: 'Summer',
        fishSpecies: ['Rainbow Trout', 'Brown Trout', 'Brook Trout'],
        description: 'Known as one of the most challenging spring creeks in the West, Silver Creek offers technical dry fly fishing for large, selective trout.',
        location: 'Picabo, Idaho',
        access: 'Nature Conservancy Preserve and public access points',
        image: 'images/silver-creek.jpg'
    }
];

export async function getFishingSpots() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(fishingSpots);
        }, 500);
    });
} 