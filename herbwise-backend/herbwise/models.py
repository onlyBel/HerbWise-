from . import db

class Herb(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)
    uses = db.Column(db.Text, nullable=False)

    def __repr__(self):
        return f'<Herb {self.name}>'

