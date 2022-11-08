class GeneratorSearchParams {
  public searchParamsStr: string = '?';
  // private searchParamQueryStartSeparator = '?';
  private betweenSearchParamsSeparator = '&';

  public set(key: string, values: string[]): void {
    if (this.searchParamsStr === '?') {
      this.searchParamsStr += `${key}=${this.valuesToStr(values)}`;
    } else {
      this.searchParamsStr += `${
        this.betweenSearchParamsSeparator
      }${key}=${this.valuesToStr(values)}`;
    }
  }

  public getStringSearchParams(): string {
    return this.searchParamsStr;
  }

  private valuesToStr(values: string[]): string {
    return values.join(',');
  }
}

export default GeneratorSearchParams;
