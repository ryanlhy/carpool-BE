const factoryController = (Model) => {
  return {
    getAll: async (req, res) => {
      try {
        const records = await Model.findAll();
        res.status(200).json(records);
      } catch (error) {
        res
          .status(500)
          .json({
            message: `Error occurred while fetching ${Model.name.toLowerCase()}s`,
            error,
          });
      }
    },

    getById: async (req, res) => {
      try {
        const record = await Model.findByPk(req.params.id);
        if (!record)
          return res.status(404).json({ message: `${Model.name} not found` });
        res.status(200).json(record);
      } catch (error) {
        res
          .status(500)
          .json({
            message: `Error occurred while fetching ${Model.name.toLowerCase()}`,
            error,
          });
      }
    },

    create: async (req, res) => {
      try {
        const record = await Model.create(req.body);
        res.status(201).json(record);
      } catch (error) {
        res
          .status(500)
          .json({
            message: `Error occurred while creating ${Model.name.toLowerCase()}`,
            error,
          });
      }
    },

    update: async (req, res) => {
      try {
        const [updated] = await Model.update(req.body, {
          where: { id: req.params.id },
        });
        if (!updated)
          return res.status(404).json({ message: `${Model.name} not found` });
        res.status(200).json({ message: `${Model.name} updated successfully` });
      } catch (error) {
        res
          .status(500)
          .json({
            message: `Error occurred while updating ${Model.name.toLowerCase()}`,
            error,
          });
      }
    },

    delete: async (req, res) => {
      try {
        const deleted = await Model.destroy({
          where: { id: req.params.id },
        });
        if (!deleted)
          return res.status(404).json({ message: `${Model.name} not found` });
        res.status(204).json({ message: `${Model.name} deleted successfully` });
      } catch (error) {
        res
          .status(500)
          .json({
            message: `Error occurred while deleting ${Model.name.toLowerCase()}`,
            error,
          });
      }
    },
  };
};

module.exports = factoryController;
