from django.db import models

# Create your models here.

class Hexagram(models.Model):
    digits = models.CharField(max_length=6)
    number = models.IntegerField(blank=True)
    name = models.TextField(blank=True)
    overview = models.TextField(blank=True)
    sequence = models.TextField(blank=True)
    note = models.TextField(blank=True)
    judgement_poem = models.TextField(blank=True)
    judgement = models.TextField(blank=True)
    image_poem = models.TextField(blank=True)
    image = models.TextField(blank=True)
    emphasis1_poem = models.TextField(blank=True)
    emphasis1 = models.TextField(blank=True)
    emphasis2_poem = models.TextField(blank=True)
    emphasis2 = models.TextField(blank=True)
    emphasis3_poem = models.TextField(blank=True)
    emphasis3 = models.TextField(blank=True)
    emphasis4_poem = models.TextField(blank=True)
    emphasis4 = models.TextField(blank=True)
    emphasis5_poem = models.TextField(blank=True)
    emphasis5 = models.TextField(blank=True)
    emphasis6_poem = models.TextField(blank=True)
    emphasis6 = models.TextField(blank=True)
    emphasisall_poem = models.TextField(blank=True)
    emphasisall = models.TextField(blank=True)
    
    def __str__(self):
        return f"{self.digits}: #{self.number} -{self.name}"
    
    def serialize(self):
        return {
            "digits": self.digits, 
            "number": self.number, 
            "name": self.name,
            "overview": self.overview,
            "sequence": self.sequence,
            "note": self.note,
            "judgement_poem": self.judgement_poem,
            "judgement": self.judgement,
            "image_poem": self.image_poem,
            "image": self.image,
            "emphasis1_poem": self.emphasis1_poem,
            "emphasis2_poem": self.emphasis2_poem,
            "emphasis3_poem": self.emphasis3_poem,
            "emphasis4_poem": self.emphasis4_poem,
            "emphasis5_poem": self.emphasis5_poem,
            "emphasis6_poem": self.emphasis6_poem,
            "emphasisall_poem": self.emphasisall_poem,
            "emphasis1": self.emphasis1,
            "emphasis2": self.emphasis2,
            "emphasis3": self.emphasis3,
            "emphasis4": self.emphasis4,
            "emphasis5": self.emphasis5,
            "emphasis6": self.emphasis6,
            "emphasisall": self.emphasisall,
        }

class Fortune(models.Model):
    query = models.TextField()
    result = models.ForeignKey(Hexagram, on_delete=models.CASCADE)
    digits = models.CharField(max_length=6)
    relevance = models.IntegerField(blank=True, null=True)
    notes = models.TextField(blank=True, null=True)
    timestamp = models.DateTimeField()

    def __str__(self):
        length = 20
        query = self.query if len(self.query) <= length else self.query[:length]
        return f"{query}...{self.digits}" 

    def serialize(self):
        return {
            "query": self.query,
            "digits": self.digits,
            "relevance": self.relevance,
            "notes": self.notes,
            "timestamp": self.timestamp
        }
