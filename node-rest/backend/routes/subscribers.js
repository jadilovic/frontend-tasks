const express = require('express');
const Subscriber = require('../models/subscriber');

const router = express.Router();

const getSubscriber = async (req, res, next) => {
	let foundSubscriber;
	try {
		foundSubscriber = await Subscriber.findById(req.params.id);
		if (foundSubscriber === null) {
			return res.status(404).json({ message: 'Cannot find subscriber' });
		}
		res.subscriber = foundSubscriber;
		next();
	} catch (error) {
		return res.status(500).json({ message: 'Server error' });
	}
};

router.get('/', async (req, res) => {
	try {
		const subscribers = await Subscriber.find();
		res.status(200).json(subscribers);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

router.get('/:id', getSubscriber, (req, res) => {
	res.json(res.subscriber);
});

router.post('/', async (req, res) => {
	const { name, subscribedToChannel } = req.body;
	try {
		const subscriber = await Subscriber.create({ name, subscribedToChannel });
		res.status(201).json(subscriber);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

router.patch('/:id', getSubscriber, async (req, res) => {
	if (req.body.name) {
		try {
			const patchedSubscriber = await Subscriber.findOneAndUpdate(
				{ _id: req.params.id },
				{ name: req.body.name }
			);
			res.json(patchedSubscriber);
		} catch (error) {
			res.status(500).json({ message: 'Server error' });
		}
	} else {
		res.status(401).json({ message: 'No input provided' });
	}
});

router.delete('/:id', getSubscriber, async (req, res) => {
	try {
		const removedSubscriber = await Subscriber.deleteOne(res.subscriber);
		console.log(removedSubscriber.acknowledged);
		res.status(200).json({ message: 'Subscriber was deleted' });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

module.exports = router;
