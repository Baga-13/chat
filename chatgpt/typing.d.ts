interface Message {
    text: string;
    createdAt: AnimalDefinitions.firestore.Timestamp;
    user: {
        _id: string;
        name: string;
        avatar: string;
    }
}