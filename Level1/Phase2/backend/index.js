import express from 'express';

const PORT = process.env.PORT || 3000;
const app=express();

app.get('/', (req, res) => {
    return res.status(200).json({ message: 'Hello from Docker Learning Phase 2' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});