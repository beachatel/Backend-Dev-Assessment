import numpy as np
import pandas as pd

import datetime as dt

df = pd.read_csv(
    "/Users/bea/Documents/[02] University/[01] Y1/[02] T2/[01] Backend Development/[14] Assessment/Code/Data/pal.csv"
)


sorted_df = df.sort_values(by=["age"], ascending=False)

sorted_df.to_csv("age_sorted.csv", index=False)
