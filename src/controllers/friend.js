const { friend } = require("../../models");

exports.addFriend = async (req, res) => {
  try {
    const data = req.body;

    const createData = await friend.create(data);

    res.send({
      status: "success",
      data: createData,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "serber addfriend error",
    });
  }
};

exports.getFriend = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await friend.findOne({
      where: { id: id },
    });

    res.send({
      status: "success",
      data: { data },
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "server user error",
    });
  }
};

exports.updateFriend = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    await friend.update(data, {
      where: {
        id,
      },
    });

    res.send({
      status: "success",
      data: { data },
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "serber updatefriend error",
    });
  }
};

exports.getFriends = async (req, res) => {
  try {
    const datas = await friend.findAll();

    res.send({
      status: "success",
      data: { datas },
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "serber updatefriend error",
    });
  }
};

exports.deleteFriend = async (req, res) => {
  try {
    const { id } = req.params;
    await friend.destroy({
      where: { id },
    });

    res.send({
      status: "success",
      data: `delete data with id = ${id}`,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "serber updatefriend error",
    });
  }
};
