<script lang="ts" context="module">
    
    export function checkUndefined(e: any): e is undefined {
      return e === undefined || e === "undefined";
    }
  
    function checkNull(e: any): e is null {
      return e === null || e === "null";
    }
  
    type empty = [] | Record<string, never> | "" | '""';
    function checkEmpty(e: any): e is empty {
      if (Array.isArray(e) && e.length < 1) return true;
      else if (
        !Array.isArray(e) &&
        typeof e === "object" &&
        Object.keys(e).length < 1
      )
        return true;
      else if (
        !Array.isArray(e) &&
        typeof e !== "object" &&
        (e === "" || e === '""')
      )
        return true;
      return false;
    }
  
    export function checkUndefinedOrNull(e: any): e is undefined | null {
      return checkUndefined(e) || checkNull(e);
    }
  
    export function checkUndefinedNullOrEmpty(
      e: any
    ): e is undefined | null | empty {
      return checkUndefined(e) || checkNull(e) || checkEmpty(e);
    }
  
    export const mergeArrays = (arrays: any[]) => {
      const merged_arr: any[] = [];
      for (let i = 0; i < arrays.length; i++) {
        if (Array.isArray(arrays[i]))
          arrays[i].map(
            (val: any) => !merged_arr.includes(val) && merged_arr.push(val)
          );
      }
      return merged_arr;
    };
  
    export const mergeObjects = (target: any, ...sources: any[]): any => {
      if (!sources.length) return target;
      const sourceObj = sources.shift();
      const source: { [key: string]: any } =
        sourceObj !== undefined ? sourceObj : {};
      const isObject = (item: object) => {
        return item && typeof item === "object" && !Array.isArray(item);
      };
  
      if (isObject(target) && isObject(source)) {
        for (const key in source) {
          if (isObject(source[key])) {
            if (!target[key]) Object.assign(target, { [key]: {} });
            mergeObjects(target[key], source[key]);
          } else {
            Object.assign(target, { [key]: source[key] });
          }
        }
      }
  
      return mergeObjects(target, ...sources);
    };
  </script>
  