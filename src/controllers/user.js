const { user } = require("../../models");

exports.addUser = async (req, res) => {
  try {
    const data = req.body;

    const createData = await user.create(data);

    res.send({
      status: "success",
      data: createData,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "server user error",
    });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await user.findAll();

    res.send({
      status: "success",
      data: { users },
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "server user error",
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await user.findOne({
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

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    await user.update(updateData, {
      where: { id },
    });

    res.send({
      status: "success",
      data: { updateData },
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "server user error",
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    await user.destroy({
      where: { id },
    });

    res.send({
      status: "success",
      message: `data ${id} terhapus`,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "server user error",
    });
  }
};
