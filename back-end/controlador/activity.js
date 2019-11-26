const Activity = require("../model/activity");


function getActivity(req, res) {

    let activityId = req.params.itineraryId;

    Activity.find({ itineraryId: `${activityId}` }, (err, activity) => {
        if (err)
            res
                .status(500)
                .send({
                    message: `Error relizar la consulta a la base de datos: ${err}`
                });
        if (!activity)
            return res
                .status(404)
                .send({
                    message: "No existen actividades para la ciudad seleccionada "
                });
    }).populate('itineraryId')
        .then(activity => {
            res.send(200, { activity });
        });
}

function getActivities(req, res) {

    Activity.find({}, (err, Activities) => {
        if (err)
            res.status(500).send({
                message: `Error relizar la consulta a la base de datos: ${err}`
            });
        if (!Activities)
            return res.status(404).send({
                message: "No existen actividades para la ciudad seleccionada"
            })

            res.send(200, { Activities });

    });
}

function saveActivity(req, res) {
    console.log("POST /Activity");
    console.log(req.body);

    let activity = new Activity();

    activity.image = req.body.image;


    activity.save((err, activityStored) => {
        if (err)
            res
                .status(500)
                .send({ message: `Error al guardar en la base de datos: ${err}` });

        res.status(200).send({ activity: activityStored });
    });
}

module.exports = {
    getActivity,
    getActivities,
    saveActivity
};
