import { create } from "zustand";

const useUserProfile = create((set) => ({
    profile: [
        {
            username: "john_doe",
            status: "Hey there! I am using ChatApp.",
            profilePictureUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
            lastSeen: "2024-08-30T14:23:00Z",
            isOnline: true,
            bio: "Coffee lover. Tech enthusiast.",
        },
        {
            username: "jane_smith",
            status: "Busy",
            profilePictureUrl: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
            lastSeen: "2024-08-30T13:45:00Z",
            isOnline: false,
            bio: "Traveler. Foodie. Dreamer.",
        },
        {
            username: "alice_wonder",
            status: "At the movies",
            profilePictureUrl: "https://images.unsplash.com/photo-1499557354967-2b2d8910bcca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
            lastSeen: "2024-08-30T15:10:00Z",
            isOnline: false,
            bio: "Nature enthusiast. Avid reader.",
        },
        {
            username: "bob_marley",
            status: "Feeling blessed",
            profilePictureUrl: "https://plus.unsplash.com/premium_photo-1710911198710-3097c518f0e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
            lastSeen: "2024-08-30T16:30:00Z",
            isOnline: true,
            bio: "Music is life. Peace and love.",
        },
    ],
}));

export default useUserProfile;
