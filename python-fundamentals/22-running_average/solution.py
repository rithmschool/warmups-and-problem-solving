class RunningAverage:
    """Provide running average."""

    def __init__(self):
        self.sum = 0
        self.count = 0

    def avg(self, num):
        """Add to numbers and return average."""

        self.sum += num
        self.count += 1
        return self.sum / self.count
