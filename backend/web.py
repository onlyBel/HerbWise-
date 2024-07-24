#!/usr/bin/env python3
'''A module with tools for web request caching and tracking.
'''
import redis
import requests
from functools import wraps
from typing import Callable


rdis_store = redis.Redis()
'''The module-level Redis instance.
'''


def data_cacher(method: Callable) -> Callable:
    '''Caching the result of fetched data.
    '''
    @wraps(method)
    def invoker(url) -> str:
        '''wrapper function for caching the result.
        '''
        rdis_store.incr(f'count:{url}')
        result = rdis_store.get(f'result:{url}')
        if result:
            return result.decode('utf-8')
        result = method(url)
        rdis_store.set(f'count:{url}', 0)
        rdis_store.setex(f'result:{url}', 10, result)
        return result
    return invoker


@data_cacher
def get_page(url: str) -> str:
    '''Returns HTML content of a URL after caching the request's response,
    and tracking the request.
    '''
    return requests.get(url).text
