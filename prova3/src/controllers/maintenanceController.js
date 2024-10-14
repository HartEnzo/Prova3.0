import maintenance from "../models/maintenanceModel.js"

export const store = async (req, res) => {
    try {
        const content = await maintenance.create(req.body);
        res.status(201).json(content)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

export const index = async (req, res) => {
    try {
        const content = await maintenance.find(req.query).exec();
        res.json(content)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

export const show = async (req, res) => {
    try {
        const content = await maintenance.findById(req.params.id).populate("nomeS").exec();
        res.json(content)
    } catch (error) {
        res.status(400).send(error.message)
    }
}
export const update = async (req, res) => {
    try {
        const content = await maintenance.findByIdAndUpdate(req.params.id, req.body).exec();
        console.log(content)
        if (!content) {
            return res.status(404).send('Document not found');
        }
        res.json(content);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
// export const update = async (req, res) => {
//     try {
//         const content = await maintenance.findByIdAndUpdate(req.params.id, req.body).exec();
//         res.json(content)
//     } catch (error) {
//         res.status(400).send(error.message)
//     }
// }

export const destroy = async (req, res) => {
    try {
        const content = await maintenance.findByIdAndDelete(req.params.id).exec();
        res.json(content)
    } catch (error) {
        res.status(400).send(error.message)
    }
}