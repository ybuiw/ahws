/**
 * 设置 col 栅格布局
 * @span
*/
export const getColSpan = (span: number | boolean = 1) => {
  if (typeof span === 'boolean') {
    return {
      xs: { span: 24 },
      sm: { span: 24 },
      md: { span: 24 },
      lg: { span: 24 },
      xl: { span: 24 },
    }
  }
  if (span > 1) {
    return {
      xs: { span: 24 },
      sm: { span: 24 },
      md: { span: 12 },
      lg: { span: span === 2 ? 8 * span : 8 * (span - 1) },
      xl: { span: 6 * span },
    }
  }
  return {
    xs: { span: 24 },
    sm: { span: 24 },
    md: { span: 12 },
    lg: { span: 8 },
    xl: { span: 6 },
  };
}