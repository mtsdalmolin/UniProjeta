const tf = require('@tensorflow/tfjs');
const Org = require('../models/Org');

// const tf = require('@tensorflow/tfjs-node');

// require('@tensorflow/tfjs-node');


// Train a simple model:
// const model = tf.sequential();
// model.add(tf.layers.dense({units: 100, activation: 'relu', inputShape: [10]}));
// model.add(tf.layers.dense({units: 1, activation: 'linear'}));
// model.compile({optimizer: 'sgd', loss: 'meanSquaredError'});

// const xs = tf.randomNormal([100, 10]);
// const ys = tf.randomNormal([100, 1]);


// train();

module.exports = {
	async index(req, res) {
		const response = await Org.find();

		xs_data = [];
		ys_data = [];

		for (let i = 0; i < response.length; i++) {
			for (let info = 0; info < response[i].data.length; info++) {
				// inputs
				xs_data.push([
					response[i].data[info].expenses.committed,
					response[i].data[info].expenses.settled,
					response[i].data[info].expenses.paid,
					// response[i].data[info].year,
				]);

				// outputs
				ys_data.push([
					response[i].data[info].igc_cont_value,
				]);	
			}
		}
// console.log(xs_data);
		// Train a simple model:
		const model = tf.sequential();
		// hidden
		model.add(tf.layers.dense({
			units: 50,
			activation: 'tanh',
			inputShape: [3]
		}));

		// output
		model.add(tf.layers.dense({
			units: 1,
			activation: 'selu',
			initializer: 'lecun_normal'
		}));
		
		model.compile({
			optimizer: 'rmsprop', 
			loss: 'meanSquaredError'
		});

		xs = tf.tensor2d(xs_data);
		ys = tf.tensor2d(ys_data);

		train().then(() => {
			let outputs = model.predict(xs);
			outputs.print();
			console.log('training complete!');
		});

		async function train() {
			// console.log(xs);
			// console.log(ys);
			for (let i = 0; i < 1000; i++) {
				// const res = await model.fit(xs, ys, {
				//   epochs: 1,
				// });
				const res = await model.trainOnBatch(xs, ys);
				console.log(res);
				// console.log(`loss = ${res.history.loss[0]}`);
			}
		}

		obj = {xs: xs_data, ys: ys_data};

		return res.json(obj);
	}
}