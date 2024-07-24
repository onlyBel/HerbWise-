#!/usr/bin/python3
"""Defines BasicCache class that inherits from BaseCaching"""


BaseCaching = __import__('base_caching').BaseCaching


class BasicCache(BaseCaching):
    """ A Basic Caching implementation """

    def put(self, key, item):
        """ Store the item to the dictionary """
        if key and item:
            self.cache_data[key] = item

    def get(self, key):
        """ Retrieve , and return the value associated with the given key """
        return self.cache_data.get(key)
